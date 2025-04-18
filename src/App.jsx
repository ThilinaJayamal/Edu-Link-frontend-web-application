import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Dashbord from './Dashbord'
import AuthRoutes from './utils/AuthRoutes'
import { ToastContainer } from 'react-toastify';
import SendEmails from './screens/SendEmails'
import Home from './screens/Home'
import Registration from './screens/Registration'
import Profile from './screens/Profile'
import Attendance from './screens/Attendance'

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<AuthRoutes />}>
          <Route element={<Dashbord />}>
            <Route path='/' element={<Home />} />
            <Route path='/send' element={<SendEmails />} />
            <Route path='/register' element={<Registration />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/attendance' element={<Attendance />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App