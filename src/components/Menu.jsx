import React, { useContext } from 'react'
import { House, UserPlus, AtSign, Table2, CircleUser, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const menuBar = [
  {
    title: "Home",
    icon: <House />,
    path: "/"
  },
  {
    title: "Registration",
    icon: <UserPlus />,
    path: "/register"
  },
  {
    title: "Send emails",
    icon: <AtSign />,
    path: "/send"
  },
  {
    title: "Attendance",
    icon: <Table2 />,
    path: "/attendance"
  },
  {
    title: "Profile",
    icon: <CircleUser />,
    path: "/profile"
  }
]


function Menu() {
  const currentPath = useLocation().pathname;
  const { logout } = useContext(AuthContext);
  return (
    <div className='flex flex-col h-full'>
      <img src="./logo.png" alt="" className='w-20 h-20 rounded-full mb-8' />
      <div className='flex flex-col'>
        {
          menuBar.map((item) => (
            <Link className={`flex gap-2 items-center
                        ${currentPath === item.path && 'bg-[#333945]'} 
                        p-3 rounded-lg`} key={item.title} to={item.path}>
              <span className='text-white text-sm'>{item.icon}</span>
              <span className='text-white text-sm'>{item.title}</span>
            </Link>
          ))
        }
      </div>
      <div className={'flex gap-2 p-3 rounded-lg mt-auto cursor-pointer'}
        onClick={() => logout()}>
        <span className='text-white text-sm'><LogOut /></span>
        <span className='text-white text-sm'>Logout</span>
      </div>
    </div>
  )
}

export default Menu