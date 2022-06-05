import React, { useRef, useEffect, useState } from "react";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  return (
    <div
      onMouseEnter={() => {
        setIsSidebarOpen(true);
      }}
      onMouseLeave={() => {
        setIsSidebarOpen(false);
      }}
    >
      <div className={`bg--300 w-16 border`}></div>
      <div
        ref={ref}
        className={`transition-all absolute bg--300 ${
          isSidebarOpen ? "w-64" : "w-16"
        } top-0 bottom-0 left-0 overflow-y-auto  bg-gray-100`}
      >
        <div className='flex justify-end p-3'>
          <label
            onClick={() => {
              setIsSidebarOpen(!isSidebarOpen);
            }}
            htmlFor='my-drawer'
            className='btn'
          >
            O
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
