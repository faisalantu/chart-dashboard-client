import React from "react";
import { FiMenu } from "react-icons/fi";
import FilterNavbar from './FilterNavbar';


const Navbar = ({ setIsSidebarOpen, isSidebarOpen }) => {
  return (
    <div className='navbar bg-gray-100 '>
      <div className='flex-1 '>
        <div className='flex justify-end p-3 md:hidden'>
          <label
            onClick={() => {
              setIsSidebarOpen(!isSidebarOpen);
            }}
            htmlFor='my-drawer'
            className='btn btn-primary'
          >
            <FiMenu />
          </label>
        </div>
      </div>
      <div className='flex-none'>
        <FilterNavbar/>
        <div className='dropdown dropdown-end'>
          <label tabIndex='0' className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              <img src='https://api.lorem.space/image/face?hash=33791' alt='' />
            </div>
          </label>
          <ul
            tabIndex='0'
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <div className='justify-between'>
                Profile
                <span className='badge'>New</span>
              </div>
            </li>
            <li>
              <div>Settings</div>
            </li>
            <li>
              <div>Logout</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
