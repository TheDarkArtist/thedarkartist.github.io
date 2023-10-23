import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' h-10 flex justify-between items-center px-4 bg-slate-800'>
        <div>TheDarkArtist</div>
        <div></div>
        <div>
            <ul className='flex' >
                <li className='px-2 hover:text-slate-400 cursor-pointer'><Link to="/" >Home</Link></li>
                <li className='px-2 hover:text-slate-400 cursor-pointer'><Link to="/projects" >Projects</Link></li>
                <li className='px-2 hover:text-slate-400 cursor-pointer'><Link to="/about" >About</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar