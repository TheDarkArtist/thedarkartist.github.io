import React from 'react'
import {deleteDoc, doc } from 'firebase/firestore';

import {db} from '../../services/Firebase';
import { useNavigate, useParams } from 'react-router-dom';

const BlogDelete = () => {

  const { id } = useParams();
  const navigate = useNavigate();


  const handleDelete = async () =>{ 
    await deleteDoc(doc(db, 'blog', id));  
    navigate('/blog');
  }

  const handleNoClick = () => { 
    navigate(`/blog/details/${id}`)
  }

  return (
    <>
      <div className='text-2xl px-4 ' >Delete</div>
      <div className='px-4 py-2'>Do you really with to delete the blog</div>
      <div className='flex justify-center'> 
        <button onClick={handleDelete} className="bg-green-700 px-4 py-1 m-1">Yes</button>
        <button onClick={handleNoClick} className="bg-red-700 px-4 py-1 m-1">No</button>

      </div>
    </>
  )
}

export default BlogDelete
