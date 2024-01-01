import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/Firebase';
import { useParams } from 'react-router-dom';

import BlogBar from './ProjectBlogBar';

const ProjectBlogDetails = () => {
  const [blog, setBlog] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      const docRef = doc(db, 'projectBlog', id)
      const docSnap = await getDoc(docRef);
      setBlog(docSnap.data());
    }
    fetchBlog()
  }, []);


  return (
    <>
    <BlogBar id={id} condition={true} />
    <div className='p-2' >
      <div className='text-[1.2rem]' >{blog.title}</div>
      <div className='py-2' >{blog.body}</div>
    </div>
    </>
  )
}

export default ProjectBlogDetails
