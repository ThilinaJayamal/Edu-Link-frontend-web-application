import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashbord from './pages/Dashbord'
import AuthRoutes from './utils/AuthRoutes'
import { ToastContainer } from 'react-toastify';
import SendEmails from './screens/SendEmails'
import Home from './screens/Home'
import Registration from './screens/Registration'
import Profile from './screens/Profile'
import Attendance from './screens/Attendance'
import Locker from './screens/Locker'
import AllStudents from './screens/AllStudents'
import DisplayStudent from './screens/DisplayStudent'

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<AuthRoutes />}>
          <Route element={<Dashbord />}>
            <Route path='/' element={<Home />} />
            <Route path='/send-email' element={<SendEmails />} />
            <Route path='/register' element={<Registration />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/students' element={<AllStudents/>} />
            <Route path='/students/:id' element={<DisplayStudent/>} />
            <Route path='/attendance' element={<Attendance />} />
            <Route path='/locker' element={<Locker/>} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App