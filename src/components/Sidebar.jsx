import React from 'react'
import {GoX} from "react-icons/go";
import profile from "../assets/profile.png"

const sbar = ({handleSidebar}) => {
  return (
    <>
      <div id='sidebar-container' onClick={handleSidebar} className='hidden min-h-[100%] w-[100%] fixed absolute top-0 flex justify-end z-40 transition-all duration-300 ease-in-out overflow-hidden opacity-20 bg-cyan-500'>
      </div>
      <div id='sidebar' className='min-h-[100%] bg-black w-0 transition-all duration-100 ease-in-out overflow-hidden fixed top-0 right-0 z-40 flex flex-col justify-top align-bottom '>
        <div className="bg-[#1F1F1F] shadow shadow-neutral-700 mb-4 flex justify-between py-2 ">
          <div className="flex">
            <img
              className="h-12 w-12 rounded-[50%] mx-1"
              src={profile}
              alt=""
            />
            <div>
              <div className=" text-sm">Kushagra Sharma</div>
              <div className="text-sm">TheDarkArtist</div>
            </div>
          </div>
          <GoX
            onClick={handleSidebar}
            className="h-7 w-7 p-1 m-2 bg-[#181818] rounded text-green-900 hover:text-green-100 cursor-pointer transition ease-in-out delay-75"
          />
        </div>
        <ul className="flex flex-col justify-start p-2">
          <li className=" flex items-center text-sm h-8 px-1 py-2 rounded-sm hover:bg-[#3a383a56] cursor-pointer">
            Profile
          </li>
          <li className=" flex items-center text-sm h-8 px-1 py-2 rounded-sm hover:bg-[#3a383a56] cursor-pointer">
            Settings
          </li>
        </ul>
      </div>
  </>
  )
    
}

export default sbar;

