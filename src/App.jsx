import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Message from "./components/Message";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Blog from "./components/Blog";

function App() {
  const [open, setOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);


  const handleSidebar = () => {
    const sidebar = document.querySelector("#sidebar");
    const sidebarContainer = document.querySelector("#sidebar-container");
    if (open) {
      sidebarContainer.classList.add('hidden')
      sidebar.classList.remove('w-[75%]')
      sidebar.classList.remove('md:w-80')
      sidebar.classList.add('w-0')
      setOpen(false);
    } else {
      sidebarContainer.classList.remove('hidden')
      sidebar.classList.add('w-[75%]')
      sidebar.classList.add('md:w-80')
      sidebar.classList.remove('w-0')
      setOpen(true);
    }
  };

  const handleTDALoginClick = () => {
    setShowLoginForm(!showLoginForm)
    open && handleSidebar()
  }

   const handleSignUpForm = () => {
      showSignUpForm && setShowSignUpForm(!showSignUpForm);
  }

  const handleCreateAccount = () =>{
    setShowLoginForm(false);
    setShowSignUpForm(true);
  }

  const handleLogin = () =>{
    showSignUpForm && setShowSignUpForm(!showSignUpForm);
    setShowLoginForm(true);
  }



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
      <Sidebar handleSidebar={handleSidebar} handleTDALoginClick={handleTDALoginClick} />

      { showLoginForm && <LoginForm handleTDALoginClick={handleTDALoginClick} handleCreateAccount={handleCreateAccount} /> }
      { showSignUpForm && <SignUpForm handleLogin={handleLogin} handleSignUpForm={handleSignUpForm} /> }

      <div className="min-h-[100%] p-0.5 overflow-hidden pt-[3.2rem] lg:pt-[4rem]" >
        <Message msg="Under Development!" />
        <div className=" mt-2">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>

    </>
  );
}

export default App;
