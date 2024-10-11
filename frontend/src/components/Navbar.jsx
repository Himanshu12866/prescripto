/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import { assets } from "../assets/assets"
import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()
    const [showMenu , setshowMenu] = useState(false)
    const [token , setToken] = useState(true)
    return (
        <div className='flex item-center justify-between border-b py-4 mb-5 border-b-grey-400 text-sm'>

            <img className='w-44 cursor-pointer' src={assets.logo} alt='' />
            <ul className='hidden md:flex item-start gap-5 front-medium'>
                <NavLink to="/">
                    <li className='my-1'>Home</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
                </NavLink>
                <NavLink to="/doctors">
                    <li className='my-1'>All Doctors</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
                </NavLink>
                <NavLink  to="/about">
                    <li className='my-1'>About</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
                </NavLink>
                <NavLink to="/contact">
                    <li className='my-1'>Contact</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
                </NavLink>
            </ul>
            <div className='flex items-center gap-4'>
                <button onClick={() => navigate("/login")} className='bg-primary rounded-full px-8 py-3 text-white hidden md:block'>Create Account</button>
            </div>
        </div>
    )
}

export default Navbar