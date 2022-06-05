import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className='h-full flex flex-col overflow-x-hidden'>
      <Navbar />
      <div className='relative h-full flex'>
        <Sidebar />
        <div className='w-full'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
