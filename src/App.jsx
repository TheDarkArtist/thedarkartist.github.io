import React, { useState } from "react";
import { AuthProvider, SignupForm } from './contexts/AuthContext';

// Components 
import HelmetWrapper from "./components/utils/HelmetWrapper";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./components/routes/AppRoutes";
import { LoginForm } from "./contexts/AuthContext";

function App() {

  const [open, setOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false)

  const loginFormID = document.getElementById("login-form");

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


  const handleLoginForm = () => {
    setShowLoginForm(!showLoginForm)
  }

  const handleSignupForm = () => {
    setShowSignupForm(!showSignupForm)

  }

  const handleLoginSignup = () => {
    handleLoginForm();
    handleSignupForm();
  }



  return <AuthProvider>
    <div id="html">
      <HelmetWrapper />
      <Navbar handleSidebar={handleSidebar} handleLoginForm={handleLoginForm} />
      <Sidebar handleSidebar={handleSidebar} handleLoginForm={handleLoginForm} />
      <div className="pt-14 md:pt-20" >
        {showLoginForm && <LoginForm handleLoginForm={handleLoginForm} handleLoginSignup={handleLoginSignup} />}
        {showSignupForm && <SignupForm handleSignupForm={handleSignupForm} handleLoginSignup={handleLoginSignup} />}
        <AppRoutes />
      </div>
    </div>
  </AuthProvider>;
}

export default App

