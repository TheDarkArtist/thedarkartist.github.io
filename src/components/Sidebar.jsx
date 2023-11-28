import React from 'react'

const sbar = ({handleSidebar}) => {
  return (
    <>
    <div id='sidebar-container' onClick={handleSidebar} className='hidden h-[100vh] w-[100vw] absolute top-0 flex justify-end z-40 transition-all duration-300 ease-in-out opacity-20 bg-cyan-500'>
    </div>
      <div id='sidebar' className='h-[100vh] bg-black w-0 transition-all duration-100 ease-in-out overflow-hidden absolute top-0 right-0 z-50 flex flex-col justify-top align-bottom'>
        
      </div>
  </>
  )
    
}

export default sbar;
