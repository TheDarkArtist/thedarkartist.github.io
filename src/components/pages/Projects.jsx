import React, { useEffect, useState } from 'react';
import { addDoc, doc, collection, setDoc } from 'firebase/firestore';
import axios from 'axios';
import { db } from '../../services/Firebase';

const Projects = () => {
  useEffect(()=>{
  console.error('ok, but not ok');

  }, []);

  return (
  <p>projects</p>
     );
}

export default Projects
