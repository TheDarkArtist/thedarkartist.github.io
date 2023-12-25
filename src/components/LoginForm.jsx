import React from 'react'
import tda from "../assets/tda.png";

const LoginForm = () => {
  return (
    <div className='flex flex-col absolute top-0 left-0 overflow-hidden justify-center items-center min-h-full min-w-full p-4' >
      <div className='border w-full md:w-[25rem] flex flex-col items-center h-[40rem] bg-blue-950 border-red-600 p-2' >
        <div className='w-full flex flex-col items-end pr-2 '>x</div>
        <div className='p-1 my-4 text-xl'>Welcome, continue to login..</div>
        <img className='h-40 my-4' src={tda} alt="" />
        <div className='w-[95%]'>
        <input className='my-1 py-2 px-3 bg-green-800 w-full focus:outline-none' type="text" placeholder='Username' />
        <input className='my-1 py-2 px-3 bg-green-800 w-full focus:outline-none' type="text" placeholder='Password' />
        <button className='my-1 py-2 px-3 bg-blue-900 w-full' type='submit' >Login</button>
        <button className='mt-4 py-2 px-3 bg-blue-900 w-full' type='submit' >Google</button>
        <button className='my-2 py-2 px-3 bg-zinc-900 w-full' type='submit' >Github</button>
        </div>
        <div className='p-1 my-2 text-blue-600 text-center'>Create Account</div>
      </div>
    </div>
  )
}

export default LoginForm
