import React from "react";
import { Link } from "react-router-dom";

import profile from "../assets/profile.png";

const Navbar = ({handleSidebar}) => {
  return (
    <div className="h-12 flex justify-between items-center px-2 bg-slate-800 w-full z-30">
      <div>TheDarkArtist</div>
      <div></div>
      <div>
        <ul className="flex items-center ">
          <li className="px-1 hover:text-slate-400 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="px-1 hover:text-slate-400 cursor-pointer">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="px-1 hover:text-slate-400 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="pl-2 cursor-pointer">
              <img onClick={handleSidebar} className=" rounded-[50%] w-9 h-9" src={profile} alt="k" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
