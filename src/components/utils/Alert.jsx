import React, { useEffect } from 'react'
import { AiOutlineClose } from "react-icons/ai"

const Alert = ({ visible, msg }) => {

  const handleClose = () => {
    document.getElementById('alert').classList.add('right-[-40rem]')
  }



    return (
      <div className='flex justify-center z-30 h-0' >
        <div id='alert' className={`fixed flex items-center justify-between ${visible ? '' : 'hidden'} font-bold z-40 w-80 top-20 md:right-4 border rounded-md border-green-900 shadow-lg shadow-red-600 bg-stone-400 dark:bg-black px-4 py-2`} >
          <span className='dark:text-green-600' >
            {msg}
          </span>
          <span className=' absolute right-2 top-2'>
          <AiOutlineClose onClick={handleClose} className='hover:dark:text-green-400 cursor-pointer' />
          </span>

        </div>
      </div>
    )

}

export default Alert  
