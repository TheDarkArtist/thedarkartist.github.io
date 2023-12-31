import React from "react";
import { Link } from "react-router-dom";
import tdaIcon from "../assets/tda.png";
import { AiOutlineUser } from "react-icons/ai";



const Navbar = ({handleSidebar, handleLoginForm}) => {
  return (
    <div className="h-12 md:h-16 flex justify-between items-center fixed px-2 bg-gradient-to-br text-white from-black via-red-950 to-black shadow-b shadow-zinc-900 shadow-md w-full z-30">
      <div className="hover:shadow-blue-500 flex justify-center items-center">
        <img src={tdaIcon} className="h-6" />
        <div className="text-lg mx-1">TheDarkArtist</div>
      </div>

      <div className="hidden md:block">To Infinity & Beyond</div>
      <div>
        <div className="flex items-center ">
          <div className="px-1 lg:px-2 hover:text-slate-400 cursor-pointer">
            <Link to="/">Home</Link>
          </div>
          <div className="px-1 lg:px-2 hover:text-slate-400 cursor-pointer">
            <Link to="/projects">Projects</Link>
          </div>
          <div className="px-1 lg:px-2 hover:text-slate-400 cursor-pointer">
            <Link to="/about">About</Link>
          </div>
          <div onClick={handleLoginForm} className="px-1 lg:px-2 hidden md:block hover:text-slate-400 cursor-pointer">
            login
          </div>
          <div className="ml-2 lg:mx-2 cursor-pointer">
              <AiOutlineUser onClick={handleSidebar} className="border p-[2px] rounded-[50%] w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
