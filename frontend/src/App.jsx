/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';

import Login from './pages/Login';
import Contacts from './pages/Contacts';
import About from './pages/About';
import MyProfile from './pages/MyProfile';
import MyAppointment from './pages/MyAppointment';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import { AppContext } from './context/AppContext';


const App = () => {
  const { theme } = useContext(AppContext)
  return (
    <div style={{ backgroundColor: `${theme}` }} className='mx-4 sm:mx-[10%]'>
      <ToastContainer />
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contacts />} />
        <Route path='/about' element={<About />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointment' element={<MyAppointment />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App