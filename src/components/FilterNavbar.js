import React, { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";
import { HiFilter } from "react-icons/hi";

const FilterNavbar = () => {
  const { setFilterState, filterState } = useContext(FilterContext);
  let data = filterState;

  const filterOnChange = (e) => { 
    data = {...data, [e.target.name]: e.target.checked }
    setFilterState(data);
  };
  return (
    <div className='dropdown dropdown-end mr-5'>
      <label
        tabIndex='0'
        className='btn btn-primary text-lg btn-circle avatar '
      >
        <HiFilter />
      </label>
      <div
        tabIndex='0'
        className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-xs'
      >
        <p className='text-sm font-semibold text-gray-500 text-center border-b p-2'>
          Filter Available Data
        </p>
        <div className='form-control mt-3 p-2 flex flex-col gap-4'>
          <label className='flex items-center cursor-pointer gap-5'>
            <input
              onChange={filterOnChange}
              type='checkbox'
              checked={filterState.end_year}
              name='end_year'
              className='checkbox checkbox-primary'
            />
            <span className='label-text'>End_Year</span>
          </label>
          <label className='flex items-center cursor-pointer gap-5'>
            <input
              type='checkbox'
              onChange={filterOnChange}
              name='topic'
              checked={filterState.topic}
              className='checkbox checkbox-primary'
            />
            <span className='label-text'>Topic</span>
          </label>
          <label className='flex items-center cursor-pointer gap-5'>
            <input
              type='checkbox'
              onChange={filterOnChange}
              name='sector'
              checked={filterState.sector}
              className='checkbox checkbox-primary'
            />
            <span className='label-text'>Sector</span>
          </label>
          <label className='flex items-center cursor-pointer gap-5'>
            <input
              type='checkbox'
              onChange={filterOnChange}
              name='region'
              checked={filterState.region}
              className='checkbox checkbox-primary'
            />
            <span className='label-text'>Region</span>
          </label>
          <label className='flex items-center cursor-pointer gap-5'>
            <input
              type='checkbox'
              onChange={filterOnChange}
              name='pestle'
              checked={filterState.pestle}
              className='checkbox checkbox-primary'
            />
            <span className='label-text'>Pestle</span>
          </label>
          <label className='flex items-center cursor-pointer gap-5'>
            <input
              type='checkbox'
              onChange={filterOnChange}
              name='source'
              checked={filterState.source}
              className='checkbox checkbox-primary'
            />
            <span className='label-text'>Source</span>
          </label>
          <label className='flex items-center cursor-pointer gap-5'>
            <input
              type='checkbox'
              onChange={filterOnChange}
              name='country'
              checked={filterState.country}
              className='checkbox checkbox-primary'
            />
            <span className='label-text'>Country</span>
          </label>
          <label className='flex items-center cursor-pointer gap-5'>
            <input
              type='checkbox'
              onChange={filterOnChange}
              name='impact'
              checked={filterState.impact}
              className='checkbox checkbox-primary'
            />
            <span className='label-text'>Impact</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterNavbar;
