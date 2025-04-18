import React, { useContext, useEffect } from 'react'
import { AuthContext } from './context/AuthContext';
import { Outlet, useNavigate } from 'react-router-dom';
import Menu from './components/Menu';


function Dashbord() {
  const { user, isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  return (
    <div className='flex min-h-screen'>
      <div className='w-1/6 p-4 bg-[#101926]'>
        <Menu />
      </div>
      <div className='w-5/6 p-4'>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashbord