import React, { useRef, useState } from 'react'
import { GoX } from "react-icons/go";
import profile from "../../assets/profile.png"
import { Link } from 'react-router-dom';
import DarkMode from '../utils/DarkMode';


const sbar = ({ handleSidebar, handleTDALoginClick }) => {

  return (
    <>
      <div id='sidebar-container' onClick={handleSidebar} className='hidden min-h-[100%] w-[100%] fixed absolute top-0 flex justify-end z-40 overflow-hidden opacity-40 bg-black'>
      </div>
      <div id='sidebar' className=' min-h-[100%] bg-zinc-950 text-white bg-white dark:bg-black w-0  transition-all duration-100 ease-in-out overflow-hidden fixed top-0 right-0 z-40 flex flex-col justify-top align-bottom shadow-l shadow-lg shadow-neutral-700 '>
        <div className="bg-[#1F1F1F] shadow shadow-neutral-700 mb-2 h-20 flex items-center justify-between py-2 ">
          <div className="flex">
            <img
              className="h-10 w-12 mx-1"
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
        <ul className="flex flex-col justify-start text-black dark:text-white p-2">
          <Link className='flex items-center text-sm h-8 px-1 py-2 rounded-sm hover:bg-[#3a383a56] cursor-pointer' to="/dashboard" onClick={handleSidebar}>Dashboard</Link>
          <li className='flex items-center text-sm h-8 px-1 py-2 rounded-sm hover:bg-[#3a383a56] cursor-pointer' onClick={handleTDALoginClick}>Login</li>
          <li className='flex items-center text-sm h-8 px-1 py-2 rounded-sm hover:bg-[#3a383a56] cursor-pointer' >Log Out</li>
          <DarkMode /> 
          <Link className='flex items-center text-sm h-8 px-1 py-2 rounded-sm hover:bg-[#3a383a56] cursor-pointer' to="/Blog" onClick={handleSidebar}>Blog</Link>

        </ul>
      </div>
    </>
  )

}

export default sbar;

