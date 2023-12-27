import React, { useState } from 'react'
import { GoX } from "react-icons/go";
import profile from "../../assets/profile.png"
import { Link } from 'react-router-dom';


const sbar = ({ handleSidebar, handleTDALoginClick }) => {
  const [darkMode, setDarkMode] = useState(false);
  const darkModeSwitch = document.getElementById('darkModeSwitch')
  const e = document.getElementById("html");

  const handleDarkMode = () => {
    if (darkMode) {
      e.classList.remove('dark')
      setDarkMode(false)
    }
    else {
      e.classList.add('dark')
      setDarkMode(true)
    }
    console.log(darkModeSwitch);
  }

  const handleLogOut = () =>{
    auth.signOut().then(()=>{
      console.log("signed out successfully !")
    }).catch((error)=>{
      console.log("Error signing out" + error);
      })
    handleSidebar()
  }

  return (
    <>
      <div id='sidebar-container' onClick={handleSidebar} className='hidden min-h-[100%] w-[100%] fixed absolute top-0 flex justify-end z-40 overflow-hidden opacity-40 bg-black'>
      </div>
      <div id='sidebar' className=' min-h-[100%] bg-zinc-950 w-0  transition-all duration-100 ease-in-out overflow-hidden fixed top-0 right-0 z-40 flex flex-col justify-top align-bottom shadow-l shadow-lg shadow-neutral-700 '>
        <div className="bg-[#1F1F1F] shadow shadow-neutral-700 mb-2 h-20 flex items-center justify-between py-2 ">
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
          <Link className='flex items-center text-sm h-8 px-1 py-2 rounded-sm hover:bg-[#3a383a56] cursor-pointer' to="/dashboard" onClick={handleSidebar}>Dashboard</Link>
          <li className='flex items-center text-sm h-8 px-1 py-2 rounded-sm hover:bg-[#3a383a56] cursor-pointer' onClick={handleTDALoginClick}>Login</li>
          <li className='flex items-center text-sm h-8 px-1 py-2 rounded-sm hover:bg-[#3a383a56] cursor-pointer' onClick={handleLogOut}>Log Out</li>
          <li className='flex px-1 py-2' >
            <div className='text-sm'>Light Theme</div>
            <input id="darkModeSwitch" onClick={handleDarkMode} type="checkbox" role="switch" className="mx-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
            />

          </li>
            <Link className='flex items-center text-sm h-8 px-1 py-2 rounded-sm hover:bg-[#3a383a56] cursor-pointer' to="/Blog" onClick={handleSidebar}>Blog</Link>
          
        </ul>
      </div>
    </>
  )

}

export default sbar;

