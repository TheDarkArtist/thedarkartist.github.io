import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  return (
    <div className="flex border border-green-700 items-center border bg-black rounded-full p-1" >
      <IoSearchSharp className="h-6 w-6 ml-2" />
      <input placeholder="Search" className="bg-black px-2 py-1 w-80 rounded-full dark:text-green-400 focus:outline-none" type="text" />
    </div>
  )
}

export default Search 
