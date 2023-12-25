import React from 'react'
import tda from "../assets/tda.png";

const SignUpForm = () => {
  return (
    <div className='flex flex-col absolute top-0 left-0 overflow-hidden justify-center items-center min-h-full min-w-full p-4' >
      <div className='border w-full md:w-[25rem] flex flex-col items-center h-[40rem] bg-blue-950 border-red-600 p-2' >
        <div className='w-full flex flex-col items-end pr-2 '>x</div>
        <div className='p-1 my-4 text-xl'>Welcome, continue to Sign Up..</div>
        <img className='h-40 my-4' src={tda} alt="" />
        <div className='w-[95%]'>
        <input className='my-1 py-2 px-3 bg-green-800 w-full focus:outline-none' type="text" placeholder='Username' />
        <input className='my-1 py-2 px-3 bg-green-800 w-full focus:outline-none' type="text" placeholder='Email' />
        <input className='my-1 py-2 px-3 bg-green-800 w-full focus:outline-none' type="text" placeholder='Password' />
        <input className='my-1 py-2 px-3 bg-green-800 w-full focus:outline-none' type="text" placeholder='Password' />
        <button className='my-1 py-2 px-3 bg-blue-900 w-full' type='submit' >Sign Up</button>
        </div>
        <div className='p-1 my-2 text-blue-600 text-center'>Login</div>
      </div>
    </div>
  )
}

export default SignUpForm
