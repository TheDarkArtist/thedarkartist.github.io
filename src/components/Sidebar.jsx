import React, { useRef, useState } from 'react'
import {useAuth} from '../contexts/AuthContext';
import { GoX } from "react-icons/go";
import profile from "../assets/profile.png"
import { Link } from 'react-router-dom';
import DarkMode from './utils/DarkMode';


const sbar = ({ handleSidebar, handleLoginForm }) => {

  const {currentUser, logout} = useAuth();

  document.querySelectorAll('#sidebar-items span').forEach(li => {
    li.addEventListener('click', () => {
      handleSidebar()
    });
  });

  const handleLogout = () =>{
    logout();
  }

  return (
    <>
      <div id='sidebar-container' onClick={handleSidebar} className='hidden h-[100%] w-[100%] fixed  top-0 flex justify-end z-40 overflow-hidden opacity-40 bg-black'>
      </div>

      <div id='sidebar' className=' min-h-[100%] dark:bg-zinc-950 dark:text-white bg-white w-0  transition-all duration-100 ease-in-out overflow-hidden fixed top-0 right-0 z-40 flex flex-col justify-top align-bottom shadow-l shadow-lg shadow-neutral-700 '>
        <div className="bg-[#1F1F1F] text-white shadow shadow-neutral-700 mb-2 h-20 flex items-center justify-between py-2 ">
          <div className="flex">
            <img
              className="h-10 w-12 mx-1"
              src={profile}
              alt=""
            />
            <div>
              <div className=" text-sm">{currentUser && currentUser.displayName}</div>
              <div className="text-sm">TheDarkArtist</div>
            </div>
          </div>
          <GoX
            onClick={handleSidebar}
            className="h-7 w-7 p-1 m-2 bg-[#181818] rounded text-green-900 hover:text-green-100 cursor-pointer transition ease-in-out delay-75"
          />
        </div>
        <div id='sidebar-items' className="flex flex-col justify-start text-black dark:text-white ">
          <span> <Link  className='border-t border-b  border-red-950 flex items-center w-full font-light  h-10 px-4 py-2 hover:bg-[#3a383a56] cursor-pointer' to="/dashboard">Dashboard</Link></span>
          { !currentUser && <span className='border-t border-b  border-red-950 flex items-center w-full font-light  h-10 px-4 py-2 hover:bg-[#3a383a56] cursor-pointer' onClick={handleLoginForm}>Login</span>}
          { currentUser && <span onClick={handleLogout} className='border-t border-b  border-red-950 flex items-center w-full font-light  h-10 px-4 py-2 hover:bg-[#3a383a56] cursor-pointer' >Log Out</span>}
          <div className='border-t border-b  border-red-950 flex items-center w-full font-light  h-10 px-4 py-2 hover:bg-[#3a383a56] cursor-pointer' ><DarkMode /></div>
          <span ><Link  className='border-t border-b  border-red-950 flex items-center w-full font-light  h-10 px-4 py-2 hover:bg-[#3a383a56] cursor-pointer' to="/blog" >Blog</Link></span>

        </div>
      </div>
    </>
  )

}

export default sbar;
