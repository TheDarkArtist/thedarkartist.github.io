import React, { useState } from "react";
import { GoX } from "react-icons/go";
import profile from "../assets/profile.png";

const Sidebar = ({ handleSidebar }) => {
  return (
    <div className="sm:hidden" >
      <div
        id="sidebar"
        onClick={handleSidebar}
        className="absolute w-[100%] h-[100vh] top-0 left-0 bg-[#9c2a6310] hidden"
      ></div>

      <div
        id="sidebar-s"
        className="flex flex-col rounded bg-[#1F1F1F]  w-96  p-2 h-[100%] absolute right-0 top-0 transition ease-in-out delay-150 translate-x-full shadow shadow-[#4c2a9c9d]"
      >
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
            className="h-7 w-7 p-1 m-1 bg-[#181818] rounded text-green-900 hover:text-green-100 cursor-pointer transition ease-in-out delay-75"
          />
        </div>
        <ul className="flex flex-col justify-start p-2">
          <li className=" flex items-center text-sm h-8 px-1 py-2 rounded-md hover:bg-[#3a383a56] cursor-pointer">
            Profile
          </li>
          <li className=" flex items-center text-sm h-8 px-1 py-2 rounded-md hover:bg-[#3a383a56] cursor-pointer">
            Settings
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

// <div id="sidebar" className="flex flex-col rounded bg-[#1F1F1F] w-96 p-2 h-[100%] absolute right-0 top-0 transition ease-in-out delay-150 translate-x-full">
//       <div className="bg-[#1F1F1F] shadow shadow-neutral-700 mb-4 flex justify-between py-2 ">
//         <div className="flex">
//           <img className="h-12 w-12 rounded-[50%] mx-1" src={profile} alt="" />
//           <div>
//           <div className=" text-sm">Kushagra Sharma</div>
//           <div className="text-sm">TheDarkArtist</div>
//           </div>
//         </div>
//         <GoX onClick={handleSidebar} className="h-7 w-7 p-1 m-1 bg-[#181818] rounded text-green-900 hover:text-green-100 cursor-pointer transition ease-in-out delay-75" />
//       </div>
//       <ul className="flex flex-col justify-start p-2">
//         <li className=" flex items-center text-sm h-8 px-1 py-2 rounded-md hover:bg-[#3a383a56] cursor-pointer">Profile</li>
//         <li className=" flex items-center text-sm h-8 px-1 py-2 rounded-md hover:bg-[#3a383a56] cursor-pointer">Settings</li>
//       </ul>
//     </div>
