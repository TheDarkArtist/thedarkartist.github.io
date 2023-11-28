import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import BlogHome from "./pages/blog/BlogHome";
import BlogDetails from "./pages/blog/BlogDetails";
import BlogCreate from "./pages/blog/BlogCreate";
import BlogDelete from "./pages/blog/BlogDelete";
import BlogUpdate from "./pages/blog/BlogUpdate";
import Message from "./components/Message";
import Sidebar from "./components/Sidebar";

function App() { 
  const [open, setOpen] = useState(false);
  const handleSidebar = () => {
    const sidebar = document.querySelector("#sidebar");
    const sidebarContainer = document.querySelector("#sidebar-container");
    if (open) {
      sidebarContainer.classList.add('hidden')
      sidebar.classList.remove('w-80')
      sidebar.classList.add('w-0')
      setOpen(false);
    } else {
      sidebarContainer.classList.remove('hidden')
      sidebar.classList.add('w-80')
      sidebar.classList.remove('w-0')
      setOpen(true);
    }
  };

  

  return (
      <>  
      <Navbar handleSidebar={handleSidebar} />
      <Message />
      <Sidebar handleSidebar={handleSidebar} />
    <div className="bg-gradient-to-tl from-[#000000] to-[#02020f]" >
      <div className="py-4 px-2 ">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/blog">
            <Route path="" element={<BlogHome />} />
            <Route path=":id" element={<BlogDetails />} />
            <Route path="create" element={<BlogCreate />} />
            <Route path="delete" element={<BlogDelete />} />
            <Route path="update" element={<BlogUpdate />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
