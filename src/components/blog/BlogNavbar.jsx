import React from "react";

const BlogNavbar = () => {
  return (
    <div className="border py-2 px-4 flex justify-between bg-blue-950">
      <ul>
        <li>Blog</li>
      </ul>
      <ul className="flex">
        <li className="px-1">
          <a className="hover:text-blue-200" href="">
            Create
          </a>
        </li>
        <li className="px-1">
          <a className="hover:text-blue-200" href="">
            Update
          </a>
        </li>
        <li className="px-1">
          <a className="hover:text-blue-200" href="">
            Delete
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BlogNavbar;
