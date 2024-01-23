import React, { useEffect, useState } from 'react'

import { db } from '../../services/Firebase';
import { collection, getDocs } from 'firebase/firestore';

import BlogBar from './ProjectBlogBar';
import Search from '../utils/Search';
import { Link } from 'react-router-dom';
import ProjectBlogBar from './ProjectBlogBar';

const ProjectBlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, 'projectBlog'))
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() })
        })
        setBlogs(list);
        console.log(list);
      }
      catch (err) {
        console.log(err)
      }
    }


    fetchBlogs();
  }, []);


  return (
    <>
      <BlogBar />
      <div className='py-6 w-full flex justify-center' ><Search parameter={'projects'} searchField='title' setResults={setBlogs} List={blogs} /></div>
      <div className='m-1' >
        <div className='mx-2' >
          <div className=' text-xl md:px-8'>My GitHub Projects</div>
          <div className='text-sm text-black dark:text-green-100 md:px-8'>These projects will open on github for now, though, in future, i plan to add a kind of blog where i will describe each of these projects in detail with comment section.</div>
          <ul className='flex flex-wrap justify-start w-full  py-2' >
            {blogs ? blogs.map((blog) => (
              <Link key={blog.id} className='w-full md:mx-6 my-2 md:w-[30%] ' to={`details/${blog.id}`}>
                <div className='w-full border rounded-b border-green-500 my-2 lg:mx-2 shadow-md shadow-green-700' >
                  <div className='bg-green-700 dark:bg-red-900 w-full px-2 text-white py-1'>{blog.title}</div>
                  <div className='flex w-full justify-end pr-2' >
                    {blog.languages.map((language)=>(<span className=' m-1 text-sm text-red-950 dark:text-green-400'>{language}</span>))}
                  </div> 
                </div>          
              </Link>
            )) : ' no blogs found '}

          </ul>
        </div>
      </div>

    </>
  )
}

export default ProjectBlogList



{/*
 {blogs.map((blog) => (
          <li key={blog.id} >className='w-full lg:w-[29%]  border rounded-b border-green-500 my-2 lg:mx-2 shadow-md shadow-green-700'
            <p className='w-full bg-green-700 hover:bg-blue-700 p-1 text-white' ><a className='hover:text-blue-950 ' href={repo.html_url}>{repo.name}</a></p>
            <p className='text-green-600 p-1' >{blog.title}...</p>
          </li>
        ))}
*/}
