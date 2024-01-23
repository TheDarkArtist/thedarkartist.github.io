import React, { useEffect, useState } from 'react'

import { db } from '../../services/Firebase';
import { collection, getDocs } from 'firebase/firestore';

import BlogBar from './BlogBar';
import Search from '../utils/Search';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, 'blog'))
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() })
        })
        setBlogs(list);
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
      <div className='py-6 w-full flex justify-center' ><Search parameter={'blogs'} /></div>
      <div className='flex justify-center p-1 w-full' >
        <ul className='w-full p-1 md:w-[80%]'>
          {blogs ? blogs.map((blog, index) => (
            <Link key={index} to={`details/${blog.id}`}>
              <li key={index} className='bg-gradient-to-bl w-full min-h-[5rem] overflow-hidden border border-blue-700 rounded-b  my-4'>
                <div className='bg-red-900 w-full px-2 text-white py-1'>{blog.title}</div>
                <div className='px-2 py-1 text-xs '>{blog.body.substring(0,100)}...</div>
                <div className=' text-right text-sm pb-0.5 pr-1 text-stone-500' >June 2. 2005</div>
              </li>
            </Link>
          )) : ' no blogs found '}
        </ul>
      </div>
    </>
  )
}

export default BlogList
