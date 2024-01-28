import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/Firebase';
import { useParams } from 'react-router-dom';

import BlogBar from './ProjectBlogBar';
import MarkdownRenderer from '../utils/MarkdownRenderer';

const ProjectBlogDetails = () => {
  const [blog, setBlog] = useState([]);
  const { id } = useParams();

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
      <div className='flex justify-center mt-6'>
        <div className='p-4 w-full md:max-w-[60rem]' >
          <div className='text-2xl font-bold' >{blog.title}</div>
          <div className='py-2' ><MarkdownRenderer content={blog.body} /></div>
        </div>
      </div>
    </>
  )
}

export default ProjectBlogDetails
