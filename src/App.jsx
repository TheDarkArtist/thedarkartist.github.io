import React, { useState } from "react";

// Components 
import HelmetWrapper from "./components/utils/HelmetWrapper";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import AppRoutes from "./components/routes/AppRoutes";

function App() {
  const [open, setOpen] = useState(false);

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


  return (
    <div>
      <HelmetWrapper />
      <Navbar handleSidebar={handleSidebar} />
      <Sidebar handleSidebar={handleSidebar} />
      <div className="pt-14 md:pt-20" >
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
