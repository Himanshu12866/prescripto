/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import { assets } from "../assets/assets"
import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()
    const [showMenu, setshowMenu] = useState(false)
    const [token, setToken] = useState(true)
    return (
        <div className='flex item-center justify-between border-b py-4 mb-5 border-b-grey-400 text-sm'>

            <img className='w-44 cursor-pointer' src={assets.logo} alt='' />
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
                    (token) ? <div className='flex items-center gap-2 group relative'>
                        <img src={assets.profile_pic} className='w-8 rounded-full' alt='' />
                        <img src={assets.dropdown_icon} className='w-2.5' alt='' />
                        <div className='absolute top-0 right-0 pt-14 text-base hidden group-hover:block text-grey font-medium text-gray-600'>
                            <div className='min-w-48 flex flex-col gap-4 bg-stone-100 rounded p-4'>
                                <p onClick={() => navigate("/my-profile")} className='hover:text-black cursor-pointer'>My Profile</p>
                                <p onClick={() => navigate("my-appointment")} className='hover:text-black cursor-pointer'>My Appointment</p>
                                <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                            </div>
                        </div>
                    </div>
                        :
                        <button onClick={() => navigate("/login")} className='bg-primary rounded-full px-8 py-3 text-white hidden md:block'>Create Account</button>
                }
            </div>
        </div>
    )
}

export default Navbar