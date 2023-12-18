import React from 'react'

const About = () => {
  return (
    <>
      <div className='flex justify-between items-center h-10 bg-blue-900 bg-gradient-to-tl from-blue-900 via-blue-700 to-blue-800 mb-2 px-4'>
       <div>WHOAMI</div>
        <div>Download Resume</div>
      </div>
    <div className='flex h-[80vh] shadow-md rounded shadow-cyan-900' >
      <div className='border rounded m-1 w-[40%] hidden md:flex' ></div>
      <div className='border rounded m-1 w-[100%]' ></div>
    </div>
  </>
  )
}

export default About
