import { useEffect, useRef, useState } from 'react'
import { doc, getDoc, updateDoc } from 'firebase/firestore';

import { db } from '../../services/Firebase';

import { useAuth } from '../../contexts/AuthContext';

const Profile = () => {

  const [editProfile, setEditProfile] = useState(false)

  return (
    <div className='flex flex-wrap md:flex-nowrap gap-2 pt-10'>

      {editProfile ? <EditProfile setEditProfile={setEditProfile} /> : <ProfileView setEditProfile={setEditProfile} />}

      <div className='flex items-center justify-center h-[88vh] w-full' >Analytics Data will show here.</div>

    </div>
  )
}


const ProfileView = ({ setEditProfile }) => {

  const { currentUser } = useAuth();

  const handleSelectedComponent = () => {

  }

  return (

      <div className='w-full md:w-[30rem] ' >
        <div className='h-36 flex items-center justify-center gap-2' >
          <div className='border rounded-[50%] h-20 w-20' ></div>
          <div className='flex flex-col' >
            <span className='text-3xl font-bold text-stone-300' >{currentUser && currentUser.name.first + ' ' + currentUser.name.last}</span>
            <span className='flex items-center ' >
              <span className='text-xl text-stone-400' >{currentUser && currentUser.username}</span> <span className='text-stone-400 pl-4' > {currentUser && currentUser.dob}</span>
            </span>
          </div>
        </div>

        <div className=" pl-[12%] pr-2 pb-2 text-stone-300">{currentUser && currentUser.bio}</div>

        <div className='w-full py-2 flex justify-center' >
          <button onClick={() => setEditProfile(true)} className='rounded-md border py-.5 w-[90%] border-stone-700 bg-zinc-900 text-stone-200' >Edit Profile</button>
        </div>


        <div>
          <div className=' flex flex-col text-sm pt-2 px-6 text-stone-300'>
            <span>{currentUser && currentUser.email}</span>
            <span>{currentUser && currentUser.phoneNumber}</span>
          </div>
        </div>

        <div className='flex flex-col text-sm pt-2 px-6 text-stone-300' >
          <span>{currentUser && currentUser.address.street}</span>
          <span>{currentUser && currentUser.address.city}</span>
          <span>{currentUser && currentUser.address.state}</span>
          <span>{currentUser && currentUser.zip}</span>

        </div>
      </div>


  )
}

const EditProfile = ({ setEditProfile }) => {

  const { currentUser } = useAuth();
  const inputRefs = {
    username: useRef(),
    email: useRef(),
    password: useRef(),
    name: {
      first: useRef(),
      last: useRef(),
    },
    address: {
      street: useRef(),
      city: useRef(),
      state: useRef(),
      zip: useRef(),
    },
    dob: useRef(),
    phone: useRef(),
    bio: useRef(),
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDoc(doc(db, 'users', currentUser.uid), {
      username: inputRefs.username.current.value,
      email: inputRefs.email.current.value,
      password: inputRefs.password.current.value,
      name: {
        first: inputRefs.name.first.current.value,
        last: inputRefs.name.last.current.value,
      },
      address: {
        street: inputRefs.address.street.current.value,
        city: inputRefs.address.city.current.value,
        state: inputRefs.address.state.current.value,
        zip: inputRefs.address.zip.current.value,
      },
      dob: inputRefs.dob.current.value,
      phoneNumber: inputRefs.phone.current.value,
      bio: inputRefs.bio.current.value,
    }, { merge: true }).then(result => {
      alert('updated');

    })
      .catch(error => {
        console.error(error);
      })
    setEditProfile(false)
  }

  return (

        <div className='flex flex-col items-center pt-4 rounded-md w-full md:w-[30rem]' >
          <div className='border rounded-[50%] h-40 w-40 border border-stone-600' ></div>
          <form onSubmit={handleSubmit} className='w-[80%] text-sm text-stone-300' >
            <span className='flex flex-col rounded-sm p-1' >
              <span className='py-1 flex flex-col flex-wrap ' >
                <span className='flex flex-col m-.5'>
                  <label className='text-sm' >First Nmae</label>
                  <input ref={inputRefs.name.first} defaultValue={currentUser.name.first} className='bg-zinc-900 p-1 text-sm rounded-md py-0.5 px-2 border border-stone-600 focus:outline-none' type="text" />
                </span>
                <span className='flex flex-col m-.5' >
                  <label className='text-sm'>Last Name</label>
                  <input ref={inputRefs.name.last} defaultValue={currentUser.name.last} className='bg-zinc-900 border text-sm border-stone-600 rounded-md py-0.5 px-2 focus:outline-none' type="text" />
                </span>
              </span>

              <span className='py-1 flex flex-col flex-wrap ' >
                <span className='flex flex-col m-.5'>
                  <label className='text-sm' >Bio</label>
                  <textarea ref={inputRefs.bio} defaultValue={currentUser.bio} className='bg-zinc-900 p-1 text-sm rounded-md py-0.5 px-2 border border-stone-600 focus:outline-none' />
                </span>
              </span>

              <span className='py-1 flex flex-col flex-wrap my-1' >
                <span className='flex flex-col m.5'>
                  <label className='text-sm' >DOB</label>
                  <input ref={inputRefs.dob} defaultValue={currentUser.dob} className='bg-zinc-900 text-sm rounded-md py-0.5 px-2 border border-stone-600 focus:outline-none' type="text" />
                </span>
                <span className='flex flex-col m-.5' >
                  <label className='text-sm'>Phone</label>
                  <input ref={inputRefs.phone} defaultValue={currentUser.phoneNumber} className='bg-zinc-900 border text-sm border-stone-600 rounded-md py-0.5 px-1 focus:outline-none' type="text" />
                </span>
              </span>

              <span className='flex py-1 flex-col'>
                <span className='flex flex-col' >
                  <label>Username</label>
                  <input ref={inputRefs.username} defaultValue={currentUser.username} className='bg-zinc-900 px-2 py-0.5 rounded-md border border-stone-600 focus:outline-none' type="text" />
                </span>
                <span className='flex flex-col'>
                  <label>Email</label>
                  <input ref={inputRefs.email} defaultValue={currentUser.email} className='bg-zinc-900 px-2 py-0.5 rounded-md border border-stone-600 focus:outline-none' />
                </span>
                <span className='flex flex-col'>
                  <label>Password</label>
                  <input ref={inputRefs.password} defaultValue={currentUser.password} className='bg-zinc-900 px-2 py-0.5 rounded-md border border-stone-600 focus:outline-none' type="password" />
                </span>
              </span>
              <span className='flex py-1 flex-col'>
                <span className='flex flex-col' >
                  <label>Street</label>
                  <input ref={inputRefs.address.street} defaultValue={currentUser.address.street} className='bg-zinc-900 px-2 py-0.5 rounded-md border border-stone-600 focus:outline-none' type="text" />
                </span> <span className='flex flex-col' >
                  <label>City</label>
                  <input ref={inputRefs.address.city} defaultValue={currentUser.address.city} className='bg-zinc-900 px-2 py-0.5 rounded-md border border-stone-600 focus:outline-none' type="text" />
                </span> <span className='flex flex-col' >
                  <label>State</label>
                  <input ref={inputRefs.address.state} defaultValue={currentUser.address.state} className='bg-zinc-900 px-2 py-0.5 rounded-md border border-stone-600 focus:outline-none' type="text" />
                </span> <span className='flex flex-col' >
                  <label>Zip</label>
                  <input ref={inputRefs.address.zip} defaultValue={currentUser.address.zip} className='bg-zinc-900 px-2 py-0.5 rounded-md border border-stone-600 focus:outline-none' type="text" />
                </span>
              </span>
            </span>
            <div className='flex mb-4 justify-end p-1' >
              <button type='submit' className='bg-green-800 px-4 rounded-md mr-1 py-1' >Update</button>
              <span onClick={() => setEditProfile(false)} className="bg-stone-800 px-4 py-1 border border-stone-400 ml-1 cursor-pointer rounded-md">cancle</span>
            </div>
          </form>
        </div>

  )
}

export default Profile











{/*

        inputRefs.username.current.value = '';
      inputRefs.email.current.value = '';
      inputRefs.password.current.value = '';
      inputRefs.name.first.current.value = '';
      inputRefs.name.last.current.value = '';
      inputRefs.address.street.current.value = '';
      inputRefs.address.city.current.value = '';
      inputRefs.address.state.current.value = '';
      inputRefs.address.zip.current.value = '';
      inputRefs.dob.current.value = '';
      inputRefs.phone.current.value = '';

*/}
