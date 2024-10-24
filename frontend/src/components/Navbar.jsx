/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'

import { assets } from "../assets/assets"
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
const Navbar = () => {
    const navigate = useNavigate()
    const [showMenu, setshowMenu] = useState(false)
    const { token, setToken,userData } = useContext(AppContext)
    function LogOut() {
        setToken()
        localStorage.removeItem("token")
    }

    return (
        <div className='flex item-center justify-between border-b py-4 mb-5 border-b-grey-400 text-sm'>

            <img onClick={() => { navigate("/"); scrollTo(0, 0) }} className='w-44 cursor-pointer' src={assets.logo} alt='' />
            <ul className='hidden md:flex item-start gap-5 front-medium'>
                <NavLink to="/">
                    <li className='my-1'>Home</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to="/doctors">
                    <li className='my-1'>All Doctors</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to="/about">
                    <li className='my-1'>About</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to="/contact">
                    <li className='my-1'>Contact</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
            </ul>
            <div className='flex items-center gap-4'>
                {
                    (token) && userData ? <div className='flex items-center gap-2 group relative'>
                        <img src={userData.image} className='w-8 rounded-full' alt='' />
                        <img src={assets.dropdown_icon} className='w-2.5' alt='' />
                        <div className='absolute top-0 right-0 pt-14 text-base hidden group-hover:block text-grey font-medium text-gray-600'>
                            <div className='min-w-48 flex flex-col gap-4 bg-stone-100 rounded p-4'>
                                <p onClick={() => navigate("/my-profile")} className='hover:text-black cursor-pointer'>My Profile</p>
                                <p onClick={() => navigate("my-appointment")} className='hover:text-black cursor-pointer'>My Appointment</p>
                                <p onClick={LogOut} className='hover:text-black cursor-pointer'>Logout</p>
                            </div>
                        </div>
                    </div>
                        :
                        <button onClick={() => navigate("/login")} className='bg-primary rounded-full px-8 py-3 text-white hidden md:block'>Create Account</button>
                }
                <img className='md:hidden w-6' onClick={() => setshowMenu(true)} src={assets.menu_icon}></img>
                <div className={`${showMenu ? "w-full fixed " : "h-0 w-0"} md:hidden right-0 top-0 bottom-0 mt-3 p-2 z-20 overflow-hidden bg-white transition-all`}>
                    <div className='flex items-center justify-between'>
                        <img className="w-36" src={assets.logo} />
                        <img className="w-7" onClick={() => setshowMenu(false)} src={assets.cross_icon} />
                    </div>
                    <ul className='flex flex-col items-center gap-2 mt-5 text-lg font-medium'>
                        <NavLink onClick={() => setshowMenu(false)} to="/"><p className='py-1 px-10 rounded-lg'>Home</p></NavLink>
                        <NavLink onClick={() => setshowMenu(false)} to="/doctors"><p className='py-1 px-10 rounded-lg'>All Doctors</p></NavLink>
                        <NavLink onClick={() => setshowMenu(false)} to="/about"><p className='py-1 px-10 rounded-lg'>About</p></NavLink>
                        <NavLink onClick={() => setshowMenu(false)} to="/contact"><p className='py-1 px-10 rounded-lg'>Contact</p></NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar