import React, { useContext } from 'react'
import {
  House,
  UserPlus,
  AtSign,
  Table2,
  CircleUser,
  Lock,
  icons,
  SquareUser
}
  from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const menuBar = [
  {
    title: "Home",
    icon: <House />,
    path: "/"
  },
  {
    title: "Attendance",
    icon: <Table2 />,
    path: "/attendance"
  },
  {
    title: "Registration",
    icon: <UserPlus />,
    path: "/register"
  },
  {
    title: "Send emails",
    icon: <AtSign />,
    path: "/send-email"
  },
  {
    title:"All Students",
    icon:<SquareUser/>,
    path:"/students"
  },
  {
    title: "Locker",
    icon: <Lock />,
    path: "/locker"
  },{
    title: "Profile",
    icon: <CircleUser />,
    path: "/profile"
  }
]


function Menu() {
  const currentPath = useLocation().pathname;
  const { logout } = useContext(AuthContext);
  return (
    <div className='flex flex-col h-full p-4'>

      <Link to={"/"}>
        <img src="./dark-logo.png" alt="" className='w-20 h-20 rounded-full mb-8' />
      </Link>

      <div className='flex flex-col'>
        {
          menuBar.map((item) => (
            <Link className={`flex gap-2 items-center hover:bg-[#535d6f8e]
                        ${currentPath === item.path && 'bg-[#333945]'} 
                        p-3 rounded-lg`} key={item.title} to={item.path}>
              <span className='text-white text-sm'>{item.icon}</span>
              <span className='text-white text-sm'>{item.title}</span>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Menu