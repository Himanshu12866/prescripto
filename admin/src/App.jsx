/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import Login from './pages/login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import { Route, Routes } from 'react-router-dom';
import AddDoctor from './pages/Admin/AddDoctor';
import Dashboard from './pages/Admin/Dashboard';
import AllAppointment from './pages/Admin/AllAppointment';
import DoctorList from './pages/Admin/DoctorList';

const App = () => {
  const { aToken } = useContext(AdminContext)
  return aToken ? (

    <div>
      <ToastContainer />
      <Navbar />
      <div className='flex flex-start'>
        <SideNav />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/all-appointment" element={<AllAppointment />} />
          <Route path="/doctor-list" element={<DoctorList />} />
        </Routes>
      </div>
    </div>

  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  )
}

export default App