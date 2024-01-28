import { useRef, useState } from "react";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { IoSearchSharp } from "react-icons/io5";
import { db } from '../../services/Firebase';

const Search = ({parameter}) => {

  return (
    <form className="flex border border-green-700 w-[90%] md:w-[50%] items-center bg-stone-200 dark:bg-black rounded-full p-1">
      <IoSearchSharp className="h-6 text-stone-400 w-6 ml-2" />
      <input type="text" placeholder={`Search ${parameter ? parameter : ''} `} className="bg-stone-200 dark:bg-black px-2 py-1 w-full rounded-full dark:text-stone-400 focus:outline-none" />
    </form>
  )
}

export default Search 
