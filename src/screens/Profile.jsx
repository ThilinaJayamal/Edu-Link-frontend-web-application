import React, { use, useContext, useState } from 'react'
import { CircleUser } from 'lucide-react';
import { AuthContext } from '../context/AuthContext'

function Profile() {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const onSubmit = async (e) =>{
    e.preventDefault();
    try {
      
    } catch (error) {
      
    }
  }

  return (
    <div className='p-4 pb-24'>

      <form onSubmit={onSubmit} className='flex flex-col gap-4 w-full max-w-lg mx-auto'>
        <CircleUser className='size-32 text-gray-600 mx-auto' />
        <div className='flex flex-col sm:flex-row gap-2 items-start sm:items-center'>
          <label className='w-32'>Name</label>
          <input type="text" placeholder='Name' value={name}
            onChange={(e) => setName(e.target.value)} className='flex-1 p-2 rounded-md w-full' />
        </div>

        <div className='flex flex-col sm:flex-row gap-2 items-start sm:items-center'>
          <label className='w-32'>Email Address</label>
          <input type="email" placeholder='Email Address' value={email}
            onChange={(e) => setEmail(e.target.value)} className='flex-1 p-2 rounded-md w-full' />
        </div>

        <div className='flex flex-col sm:flex-row gap-2 items-start sm:items-center'>
          <label className='w-32'>Password</label>
          <input type="password" placeholder='Password' value={password}
            onChange={(e) => setPassword(e.target.value)} className='flex-1 p-2 rounded-md w-full' />
        </div>

        <div className='flex flex-col sm:flex-row gap-2 items-start sm:items-center'>
          <label className='w-32'>New Password</label>
          <input type="password" placeholder='New Password' value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)} className='flex-1 p-2 rounded-md w-full' />
        </div>

        <div className='flex gap-2 items-center justify-start'>
          <button className='py-2 px-6 bg-[#4169e1] text-white rounded-md mt-6 hover:bg-[#305ce0]'
          >Update</button>
        </div>

      </form>

    </div>
  )
}

export default Profile