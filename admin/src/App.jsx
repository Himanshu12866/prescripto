/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import Login from './pages/login'
import { AdminContext } from './context/AdminContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import { Route, Routes } from 'react-router-dom';
import AddDoctor from './pages/Admin/AddDoctor';
import Dashboard from './pages/Admin/Dashboard';
import AllAppointment from './pages/Admin/AllAppointment';
import DoctorList from './pages/Admin/DoctorList';
import { DoctorContext } from './context/doctorContext';
import DocAppoint from './pages/Doctor/DocAppoint';
import DocDash from './pages/Doctor/DocDash';
import DocProfile from './pages/Doctor/DocProfile';
import { AppContext } from './context/appContext';


const App = () => {
  const {theme} = useContext(AppContext)
  const { aToken } = useContext(AdminContext)
  const { docToken } = useContext(DoctorContext)
  return aToken || docToken ? (

    <div style={{backgroundColor: `${theme}`}}>
      <ToastContainer />
      <Navbar />
      <div className='flex flex-start'>
        <SideNav />
        <Routes>
          {/* Admin Routes */}
          <Route path="/" element={docToken ? <DocDash /> : <Dashboard />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/all-appointment" element={<AllAppointment />} />
          <Route path="/doctor-list" element={<DoctorList />} />
          {/* Doctors Routes */}
          <Route path='/docappoint' element={<DocAppoint />} />
          <Route path='/docdash' element={<DocDash />} />
          <Route path='/docprofile' element={<DocProfile />} />
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