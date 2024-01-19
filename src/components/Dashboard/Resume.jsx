import React, { useState } from 'react'

import {useAuth} from '../../contexts/AuthContext';

const Resume = () => {

  const [FWopen, setFWopen] = useState(true)
  const {currentUser} = useAuth();
  const handleFloatingActionButton = () => {
    const fw = document.getElementById('floating-window');
    if (FWopen) {
      fw.classList.add('w-96')
      fw.classList.add('h-60')
      fw.classList.remove('w-0')
      fw.classList.remove('h-0')
      setFWopen(!FWopen)
    } else {
      fw.classList.remove('w-96')
      fw.classList.remove('h-60')
      fw.classList.add('w-0')
      fw.classList.add('h-0')
      setFWopen(!FWopen)
    }
  }

  if(currentUser.access != 'root'){
    return(
    <div className='h-96 w-full flex justify-center items-center' >
      <span className=' md:text-2xl'>You Are Not Authorized To Access This Area.</span>
    </div>
    )
  }


  return (
    <div className='border mt-10 w-full h-full' >
      <div onClick={handleFloatingActionButton} className="border border-green-900 shadow shadow-green-700 flex justify-center items-center font-bold text-4xl text-stone-400 h-14 w-14 rounded-full fixed bottom-6 right-4 bg-green-950">+</div>
      <div id='floating-window' className="border transition-all border-green-900 shadow shadow-green-700 flex justify-center items-center font-bold text-4xl text-stone-400 h-0 w-0 rounded-md fixed bottom-24 right-4 bg-green-950 overflow-hidden"></div>

      <div className="border">kushagra</div>

    </div>
  )
}

export default Resume
