import React, {useEffect, useState, useRef} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {doc, getDoc, updateDoc } from 'firebase/firestore';
import {useAlertContext} from '../../contexts/AlertContext';

import BlogBar from './BlogBar';
import {db} from '../../services/Firebase';

const BlogUpdate = () => {
  const [blog, setBlog] = useState([]);
  const titleRef = useRef();
  const bodyRef = useRef();
  const {id} = useParams();
  const navigate = useNavigate();
  const docRef = doc(db, 'blog', id);
  const {alert, showAlert} = useAlertContext();


  useEffect(()=>{
    const handleDefaultData = async () =>{
      const docSnap = await getDoc(docRef);
      titleRef.current.value = docSnap.data().title
      bodyRef.current.value = docSnap.data().body
    }

    handleDefaultData();
    
  })

  const handleSubmit = async (e) =>{ 
    e.preventDefault();
    navigate(`/blog/details/${id}`)
    await updateDoc(docRef, {
      title: titleRef.current.value,
      body: bodyRef.current.value,
    })
    showAlert('Blog Updated!')
  }

  const handleCancle = () =>{
    navigate(`/blog/details/${id}`)
  }

  const handleChange = (value) =>{
    setEditorValue(value);
  }
  return (
    <>
    <BlogBar />
    <div>
      <div className='m-2 text-2xl' >Update Blog </div>

    <form className='flex flex-col w-full p-2' onSubmit={handleSubmit}>
      <input defaultValue={''} className='dark:bg-black bg-zinc-100 m-1 py-1 px-2 border border-green-500 focus:outline-none' id='title' placeholder='Title' ref={titleRef} type="text" />
      <textarea defaultValue={''} className='dark:bg-black bg-zinc-100 m-1 h-full py-1 px-2 border border-green-500 focus:outline-none' id="body" placeholder='Body' cols="30" ref={bodyRef} rows="25"></textarea>
      <span className='w-full flex justify-end' >
            <button className='bg-green-700 text-white px-2 m-1 py-1' >Update</button>
            <button onClick={handleCancle} className="bg-red-700 text-white px-2 m-1 py-1">Cancle</button>
          </span>
    </form>

    </div>
    </>
  )
}

export default BlogUpdate
