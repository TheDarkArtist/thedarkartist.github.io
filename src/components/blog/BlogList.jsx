import React, { useEffect, useState } from 'react'

import { db } from '../../services/Firebase';
import { collection, getDocs } from 'firebase/firestore';

import BlogBar from './BlogBar';
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
      <div className='m-1' >
        <ul>
          {blogs ? blogs.map((blog) => (
            <Link to={`details/${blog.id}`}>
            <li  className='bg-gradient-to-bl min-h-[5rem] overflow-hidden border border-blue-700 rounded-b mx-1 my-4' key={blog.id}>
              <div className='bg-red-900 w-full px-2 text-white py-1'>{blog.title}</div>
              <div className='px-2 py-1' >python</div>
              <div className='px-2 py-1'>create: {blog.created}</div>
            </li>          </Link>
          )):' no blogs found '}
        </ul>
      </div>
    </>
  )
}

export default BlogList
