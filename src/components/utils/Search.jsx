import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  return (
    <div className="flex border border-green-700 w-[90%] md:w-[50%] items-center bg-stone-200 dark:bg-black rounded-full p-1" >
      <IoSearchSharp className="h-6 text-stone-400 w-6 ml-2" />
      <input placeholder="Search" className="bg-stone-200 dark:bg-black px-2 py-1 w-full rounded-full dark:text-stone-400 focus:outline-none" type="text" />
    </div>
  )
}

export default Search 
