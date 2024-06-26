import '../index.css';
import React, { useState, useEffect } from 'react';
import EndpointsService from "../services/endpoints.service";
import { Switch } from 'antd';
import { useParams } from "react-router-dom";
import Loader from './Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function View() {
  const failNotify = () => toast.error('Something went wrong', {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const { id } = useParams();

  const [state, setState] = useState({
    loading: false,
    users: {},
  });

  useEffect(() => {
    try {
      setState({ ...state, loading: true });
      async function getUser() {
        let res = await EndpointsService.getUser(id);
        setState({
          ...state,
          loading: false,
          users: res.data,
        })
      }
      getUser();
    } catch (e) {
      failNotify();
    }
  }, [id])


  let { loading, users } = state;

  return (

    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">

      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-grey"><span className='text-indigo-500'>View</span></h2>
        </div>
        {
          loading ? <Loader /> : <div>
            {
              Object.keys(users).length > 0 &&
              <div className="form-group mt-8 space-y-6 drop-shadow-xl  sm:rounded-md bg-white py-10 px-10">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="font-sans block text-md font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={users.name}
                    readOnly
                    className="form-control mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                      value={users.description}
                      className="form-control shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      readOnly
                    />
                  </div>
                </div>

                {/* Dropdown */}
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    id="category"
                    value={users.category.category_name}
                    readOnly
                    className="form-control mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                {/* Toggle - Active/Inactive */}
                <div>
                  <Switch checkedChildren="Active" unCheckedChildren="Inactive" defaultChecked={users.status} disabled />
                </div>

                <div className='flex justify-center'>
                  <a href='/home'>Back to Home</a>
                </div>
              </div>}
          </div>
        }

      </div>
    </div>

  )
}

export default View;
