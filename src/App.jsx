import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {Helmet } from "react-helmet";

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
      <Helmet>
        <title>TheDarkArtist</title>
        <meta name="description" content="To Infinity & Beyond" />
        <meta name="keywords" content="TheDarkArtist, Kushagra, tda, coding, mitrc, rajgarh, kushagra sharma, The Dark Artist, thedarkartist, the dark artist" />
        <meta name="author" content="TheDarkArtist" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://www.thedarkartist.github.io/" />
        <meta property="og:title" content="TheDarkArtist - Portfolio" />
        <meta property="og:description" content="To Infinity & Beyond" />
        {/* <meta property="og:image" content="https://www.yourportfolio.com/thumbnail.jpg" /> */}
        <meta property="og:url" content="https://www.thedarkartist.github.io" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@TheDarkArtist00" />
        <meta name="twitter:title" content="TheDarkArtist" />
        <meta name="twitter:description" content="To Infinity & Beyond" />
        <meta name="twitter:image" content="https://www.thedarkartist.github.io/thumbnail.jpg" />
      </Helmet>

      <Navbar handleSidebar={handleSidebar} />
      <Sidebar handleSidebar={handleSidebar} />

    <div className="min-h-[100%] p-0.5 overflow-hidden pt-12 lg:pt-20" >
        
      <div className="py-4 px-2 mt-2">
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
