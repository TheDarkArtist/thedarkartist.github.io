import React, { useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { Projects, Profile, Blog, Resume, Contact, Users } from '../Dashboard';

import {useAuth} from "../../contexts/AuthContext";
import { Link } from 'react-router-dom';

const Sidebar = ({ onItemClick, handleSidebar }) => {
  const sidebarItems = ['Profile', 'Projects', 'Blog', 'Resume', 'Contact', 'Users']
  return (
    <ul id='ccs' className='bg-zinc-950 w-0 md:w-60 fixed md:block overflow-hidden h-full border-r border-zinc-700 transition-all ease-in-out delay-100'>
      <li className='flex items-center py-4 px-2 text-xl bg-black text-stone-400' >
        <HiMenu className='md:hidden w-8 h-8  mr-4 text-stone-600'  onClick={handleSidebar} />
        <span>Dashboard</span>
      </li>
      {sidebarItems.map((item, index) => (
        <li className='border-t border-b hover:bg-green-950 text-stone-400 border-zinc-800 cursor-pointer px-4 py-1 w-full' key={index} onClick={() => onItemClick(item)}>{item}</li>
      ))}
    </ul>
  )
}




const RightPannel = ({ selectedComponent }) => {
  const componentMap = {
    Profile,
    Projects,
    Blog,
    Resume,
    Contact,
    Users,
  }
  const SelectedComponent = componentMap[selectedComponent]
  return <div className='w-full min-h-full overflow-hidden bg-black md:ml-60'>
    {SelectedComponent ? <SelectedComponent /> : <Profile />}
  </div>
}





const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState(null)
  const [open, setOpen] = useState(true);
  const {currentUser} = useAuth();

  const handleItemClick = (item) => {
    setSelectedComponent(item);
  }

  const handleSidebar = () => {
    const ccs = document.getElementById('ccs');
    if (open) {
      ccs.classList.remove('w-60');
      ccs.classList.add('w-0');
      setOpen(!open)
    } else {
      ccs.classList.add('w-60');
      setOpen(!open)
    }
  }

  return (
    <>
      <div className="flex fixed justify-between items-center px-2 w-full h-10 bg-green-950">
        <HiMenu onClick={handleSidebar} className=' h-8 w-8 text-stone-400 cursor-pointer' />
        <div className='font-light' >COMMAND CENTER</div>
        <div className='font-light'>{currentUser && currentUser.username}</div>
      </div>
      { currentUser ? <div className='flex w-full'>
        <Sidebar handleSidebar={handleSidebar} onItemClick={handleItemClick} />
        <RightPannel selectedComponent={selectedComponent} />
      </div> : <div className="flex min-h-[86vh] w-full justify-center items-center">You need to login first!</div>}
    </>
  )
}





export default Dashboard
