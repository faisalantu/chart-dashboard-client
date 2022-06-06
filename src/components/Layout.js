import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SidebarMobile from './SidebarMobile';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  return (
    <div className='h-full flex flex-col overflow-x-hidden'>
      <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      <div className='h-full flex'>
        <Sidebar />
        <SidebarMobile isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
        
        <div className='w-full p-3 md:p-0'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
