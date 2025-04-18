import React, { useContext, useEffect, useState } from 'react';
import { EyeOff, Eye } from 'lucide-react';
import { AuthContext } from './context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

function Login() {
  const [isVisible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setIsLoggedIn, getUser, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  },[isLoggedIn]);

  async function onSubmit(e) {
    e.preventDefault();
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      setIsLoggedIn(true);
      await getUser();
      toast.success("Successfully Login!");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data.message || error.message);
      console.log(error?.message);
    }
  }
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      {/* Left Side - Form */}
      <div className='w-full md:w-3/5 lg:w-2/5 flex flex-col justify-center px-8 lg:px-16 py-12 gap-6 bg-white shadow-md'>

        <img src="./logo.png" alt="" className='w-32 rounded-xl' />
        <div>
          <h1 className='text-4xl font-bold text-[#5138ec]'>Welcome back!</h1>
          <p className='text-gray-600 text-base mt-1.5'>
            The modern way to manage classroom easily.</p>
        </div>


        <form className='flex flex-col gap-5' onSubmit={onSubmit}>
          {/* Email */}
          <div className='flex flex-col gap-1'>
            <label htmlFor='email' className='font-medium text-gray-700'>Email <span className='text-red-500'>*</span></label>
            <input
              type='email'
              placeholder='Enter your email address'
              className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5138ec] transition-all'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className='flex flex-col gap-1 relative'>
            <label htmlFor='password' className='font-medium text-gray-700'>Password <span className='text-red-500'>*</span></label>
            <input
              type={isVisible ? "text" : "password"}
              placeholder='Enter your password'
              className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5138ec] transition-all'
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='absolute bottom-3 right-3'>
              {
                isVisible ?
                  <Eye onClick={() => setVisible(false)} className='cursor-pointer' />
                  :
                  <EyeOff onClick={() => setVisible(true)} className='cursor-pointer' />
              }
            </div>
          </div>

          {/* Button */}
          <button
            type='submit'
            className='bg-[#5138ec] hover:bg-[#3d2bc5] transition-all text-white font-semibold rounded-md py-3 mt-2 shadow-md'
          >
            Login
          </button>
        </form>

      </div>

      {/* Right Side - Image */}
      <div className='w-full md:w-2/5 lg:w-3/5'>
        <img
          src="./login-bg.jpg"
          alt="Login Background"
          className='w-full h-[300px] md:h-full object-cover object-center'
        />
      </div>
    </div>
  );
}

export default Login;
