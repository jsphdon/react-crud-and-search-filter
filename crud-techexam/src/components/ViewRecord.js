import '../index.css';
import React, {useState, useEffect} from 'react';
import { Switch } from 'antd';
import { useParams } from 'react-router-dom';
import EndpointsService from "../services/endpoints.service";

const ViewRecord = () => {

  const [toggle, setToggle] = useState(0);
  const toggler = () => {
    toggle ? setToggle(0): setToggle(1);
  }

  return (
    <> 
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-grey"><span className='text-indigo-500'>View</span> Record</h2>
            
          </div>
          <form className="mt-8 space-y-6 drop-shadow-xl overflow-hidden sm:rounded-md bg-white py-10 px-10" action="#" method="POST">
          {/* Name */}
          <div>
            <label htmlFor="name" className="font-sans block text-md font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="given-name"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md disabled:opacity-75"
            />
          </div>  

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <div className="mt-1">
              <textarea
                id="description"
                name="description"
                rows={3}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md disabled:opacity-75"
                defaultValue={''}
              />
            </div>
          </div>

          {/* Dropdown */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              id="category"
              name="category"
              autoComplete="category-name"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:opacity-75"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>

          {/* Toggle - Active/Inactive */}
          <div>
            <label htmlFor="Inactive/Active" className="block text-sm font-medium text-gray-700">
            {toggle ? <span>Active</span>: <span>Inactive</span>}
            </label>
            <Switch onClick={toggler}/>
          </div>

          {/* DELETE BUTTON */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-md rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 font-bold"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              
              </span>
              Delete
            </button>
          </div>
          <div className='flex justify-center'>
            <a href='/'>Back to Home</a>
          </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ViewRecord;
