import { useState } from "react";
import { SignIn, SignUp } from './components/auth';

// Components 
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./components/routes/AppRoutes";
import Message from "./components/utils/Message";
import Alert from "./components/utils/Alert";
import backgroundImage from "./assets/bg.jpg";


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



  return (
    <div id="html">
      <Alert visible={false} msg={'Account Created!'} />
      <Navbar handleSidebar={handleSidebar} handleLoginForm={handleLoginForm} />
      <Sidebar handleSidebar={handleSidebar} handleLoginForm={handleLoginForm} />
      <div className="pt-12 min-h-[100vh] md:pt-16" >
        {showLoginForm && <SignIn handleLoginForm={handleLoginForm} handleLoginSignup={handleLoginSignup} />}
        {showSignupForm && <SignUp handleSignupForm={handleSignupForm} handleLoginSignup={handleLoginSignup} />}
        <AppRoutes />
      </div>
      <div className="flex justify-center border-t min-h-10 mt-4 border-stone-500 w-full p-1">
        Kushagra Is Awesome
      </div>
    </div>
  );
}

export default App

