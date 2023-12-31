import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/Firebase';
import { useParams } from 'react-router-dom';
import Markdown from 'react-markdown';

import BlogBar from './BlogBar';

const BlogDetails = () => {
  const [blog, setBlog] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      const docRef = doc(db, 'blog', id)
      const docSnap = await getDoc(docRef);
      setBlog(docSnap.data());
    }
    fetchBlog()
  }, []);


  return (
    <>
      <BlogBar id={id} condition={true} />
      <div className='p-2' >
        <div className='text-2xl' >{blog.title}</div>
        <div className='py-4' >{blog.body}</div>
      </div>
    </>
  )
}

export default BlogDetails
