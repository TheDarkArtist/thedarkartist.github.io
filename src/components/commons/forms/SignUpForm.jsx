import React, { useState } from 'react'
import tda from "../assets/tda.png";
import { auth } from "../Firebase";
import { MdClose } from "react-icons/md";
import { createUserWithEmailAndPassword, sendEmailVerification, updateCurrentUser } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const SignUpForm = ({handleLogin, handleSignUpForm}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSignIn = async () => {
    try {
      createUserWithEmailAndPassword(auth, email, password).then((userCredentials)=>{
        const user = userCredentials.user;
        navigate('/')
        handleSignUpForm()
        sendEmailVerification(user)
      })
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  return (
    <div className='flex flex-col absolute top-0 left-0 overflow-hidden justify-center items-center min-h-full min-w-full p-4' >
      <div className='border w-full md:w-[25rem] flex flex-col items-center h-[40rem] bg-blue-950 border-red-600 p-2' >
        <div className='w-full flex flex-col items-end ' onClick={handleSignUpForm}><MdClose className='h-6 w-6' /></div>
        <div className='p-1 my-4 text-xl'>Welcome, continue to Sign Up..</div>
        <img className='h-40 my-4' src={tda} alt="" />
        <div className='w-[95%]'>
          <input className='my-1 py-2 px-3 bg-green-800 w-full focus:outline-none' type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
          <input className='my-1 py-2 px-3 bg-green-800 w-full focus:outline-none' type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
          <button className='my-1 py-2 px-3 bg-blue-900 w-full' onClick={handleSignIn} >Sign Up</button>
        </div>
        <div className='p-1 my-2 text-blue-600 text-center hover:text-blue-700' onClick={handleLogin}>Login</div>
      </div>
    </div>
  )
}

export default SignUpForm
