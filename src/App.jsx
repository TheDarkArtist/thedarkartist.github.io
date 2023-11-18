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
import Sidebar from "./components/Sidebar";

function App() {
  const [open, setOpen] = useState(false);
  const handleSidebar = () => {
    if (open) {
      document.getElementById("sidebar-s").classList.add("translate-x-full");
      document.getElementById("sidebar").classList.add("hidden");
      setOpen(false);
    } else {
      document.getElementById("sidebar-s").classList.remove("translate-x-full");
      document.getElementById("sidebar").classList.remove("hidden");
      setOpen(true);
    }
  };

  return (
    <>
      <Navbar handleSidebar={handleSidebar} />
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
      <Sidebar handleSidebar={handleSidebar} />
    </>
  );
}

export default App;
