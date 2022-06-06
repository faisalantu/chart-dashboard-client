import React, { useRef, useEffect } from "react";
import { BiHomeSmile, BiArrowFromLeft, BiBrush,BiCalendarMinus,BiCloud,BiCompass,BiData,BiLayerMinus } from "react-icons/bi";
const SidebarMobile = ({isSidebarOpen, setIsSidebarOpen}) => {
  
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
      className="md:hidden"
    >
      <div className={`bg-white w-0 border`}></div>
      <div
        ref={ref}
        className={`transition-all absolute ${
          isSidebarOpen ? "w-64" : "w-0"
        } top-0 bottom-0 left-0 overflow-y-auto overflow-x-hidden  bg-gray-100 z-50`}
      >
        <div className='flex justify-end p-3'>
          <label
            onClick={() => {
              setIsSidebarOpen(!isSidebarOpen);
            }}
            htmlFor='my-drawer'
            className='btn btn-primary'
          >
            <BiArrowFromLeft />
          </label>
        </div>
        <p
          className={`${
            isSidebarOpen ? "text-left" : "text-center"
          } transition-all duration-1000 font-semibold px-5 pb-3`}
        >
          {isSidebarOpen ? "Main Navigation" : "...."}
        </p>
        <div className='text-lg font-semibold mx-2 hover:bg-white rounded-lg'>
          <button className='flex items-center gap-3 px-3 py-1 mr-3 ml-1 my-3 text-sm'>
            <span className="text-base"><BiHomeSmile /></span> <span className={`ml-3`}>Home</span>
          </button>
        </div>
        <div className='text-lg font-semibold mx-2 hover:bg-white rounded-lg'>
          <button className='flex items-center gap-3 px-3 py-1 mr-3 ml-1 my-3 text-sm'>
            <span className="text-base"><BiBrush /></span> <span className={`ml-3`}>All Themes</span>
          </button>
        </div>
        <div className='text-lg font-semibold mx-2 hover:bg-white rounded-lg'>
          <button className='flex items-center gap-3 px-3 py-1 mr-3 ml-1 my-3 text-sm'>
            <span className="text-base"><BiCalendarMinus /></span> <span className={`ml-3`}>Calender Dates</span>
          </button>
        </div>
        <div className='text-lg font-semibold mx-2 hover:bg-white rounded-lg'>
          <button className='flex items-center gap-3 px-3 py-1 mr-3 ml-1 my-3 text-sm'>
            <span className="text-base"><BiCloud /></span> <span className={`ml-3`}>Cloud Analytics</span>
          </button>
        </div>
        <div className='text-lg font-semibold mx-2 hover:bg-white rounded-lg'>
          <button className='flex items-center gap-3 px-3 py-1 mr-3 ml-1 my-3 text-sm'>
            <span className="text-base"><BiCompass /></span> <span className={`ml-3`}>Compass</span>
          </button>
        </div>
        <div className='text-lg font-semibold mx-2 hover:bg-white rounded-lg'>
          <button className='flex items-center gap-3 px-3 py-1 mr-3 ml-1 my-3 text-sm'>
            <span className="text-base"><BiData /></span> <span className={`ml-3`}>Database</span>
          </button>
        </div>
        <div className='text-lg font-semibold mx-2 hover:bg-white rounded-lg'>
          <button className='flex items-center gap-3 px-3 py-1 mr-3 ml-1 my-3 text-sm'>
            <span className="text-base"><BiLayerMinus /></span> <span className={`ml-3`}>Layers</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarMobile;
