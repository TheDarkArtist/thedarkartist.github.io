import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const ProjectBlogBar = ({id, condition }) => {

  return (
    <div className='flex justify-between py-1 px-4 bg-gradient-to-tl from-green-900 via-green-700 to-green-900' >
      <Link to={'/projects'} > Projects </Link>
      <span className='text-blue-300' >
        {condition &&  <Link className='px-1' to={`/projects/delete/${id}`} >Delete</Link>}
        {condition && <Link className='px-1' to={`/projects/update/${id}`} >Update </Link>}
        <Link className='px-1 cursor-pointer' to='/projects/create'>Create</Link>
        
      </span> 
    </div>
  )
}

export default ProjectBlogBar
