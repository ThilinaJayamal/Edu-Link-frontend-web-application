import React, { useContext, useEffect, useState, useRef } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AlignLeft, X, LogOut, Bot } from 'lucide-react';
import Menu from '../components/Menu';
import { AuthContext } from '../context/AuthContext';
import Chatbot from '../components/Chatbot';

function Dashboard() {
  const { isLoggedIn, user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-[#101926]
        text-white transition-transform duration-300 lg:static 
        lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>

        <div className="lg:hidden flex justify-end items-center p-4">
          <X
            className="cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          />
        </div>

        <Menu />
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-4 bg-white p-4">
          <div className="lg:hidden">
            <AlignLeft
              className="cursor-pointer"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open sidebar"
            />
          </div>

          <div className="hidden lg:block text-gray-600 text-base">
            EDU-LINK
          </div>

          <div className="relative" ref={dropdownRef}>
            <div
              className="flex justify-center items-center w-8 h-8 bg-black rounded-full text-white cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {user?.name && user.name.charAt(0)}
            </div>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black p-3 rounded shadow-lg z-50 min-w-[160px] text-sm">
                <span className="font-semibold mb-1 block">{user?.name}</span>
                <span className="text-gray-600 mb-3 block">{user?.email}</span>
                <button onClick={() => logout()} className='flex gap-4'>
                  <LogOut />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Dynamic route content */}
        <Outlet />
      </div>

      {/* Chatbot */}
      {showChatbot && <Chatbot />}
      <div
        className='w-12 h-12 fixed bottom-4 right-4 bg-[#4169e1] rounded-full flex justify-center items-center cursor-pointer hover:bg-[#2452dc]'
        onClick={() => setShowChatbot(prev => !prev)}
      >
        <Bot className='text-white w-8 h-8' />
      </div>
    </div>
  );
}

export default Dashboard;
