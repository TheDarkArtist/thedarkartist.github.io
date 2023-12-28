import React from "react";
import { Link } from "react-router-dom";
import profile from "../..//assets/profile.png";
import tdaIcon from "../..//assets/tda.png";

const Navbar = ({handleSidebar}) => {
  return (
    <div className="h-12 lg:h-16 flex justify-between items-center fixed px-2 bg-gradient-to-br text-white from-black via-red-950 to-black shadow-b shadow-zinc-900 shadow-md w-full z-30">
      <div className="hover:shadow-blue-500 flex justify-center items-center">
        <img src={tdaIcon} className="h-6" />
        <div className="text-lg mx-1">TheDarkArtist</div>
      </div>

      <div></div>
      <div>
        <ul className="flex items-center ">
          <li className="px-1 lg:px-2 hover:text-slate-400 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="px-1 lg:px-2 hover:text-slate-400 cursor-pointer">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="px-1 lg:px-2 hover:text-slate-400 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="ml-2 lg:mx-2 cursor-pointer">
              <img onClick={handleSidebar} className=" rounded-[50%] w-9 h-9" src={profile} alt="k" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
