/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'

import { assets } from "../assets/assets"
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
const Navbar = () => {

    const navigate = useNavigate()
    const [showMenu, setshowMenu] = useState(false)
    const { token, setToken, userData, theme, isDarkMode, textTheme, toggleDarkMode } = useContext(AppContext)
    function LogOut() {
        setToken()
        localStorage.removeItem("token")
    }

    return (
        <div style={{ backgroundColor: `${theme}`, color: `${textTheme}` }} className='flex item-center justify-between sticky mt-0 pt-4 mb-2 border-b-grey-400 text-sm' >

            <img onClick={() => { navigate("/"); scrollTo(0, 0) }} style={{ backgroundColor: `${theme === '#0f1214' ? 'white' : ''}` }} className='sm:w-52 cursor-pointer h-[60px]' src={`${theme === '#0f1214' ? assets.logo2 : assets.logo}`} alt='someimage' />
            <ul className='hidden md:flex item-start gap-5 front-medium pt-4'>
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
                <DarkModeSwitch
                    style={{ marginBottom: '2rem' }}
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                    size={30}
                />
            </ul>
            <div className='flex items-center gap-1'>
                {
                    (token) && userData ? <div className='flex items-center gap-2 group relative' >
                        <img alt='someimage' src={userData.image} className='w-8 rounded-full' />
                        <img alt='someimage' src={assets.dropdown_icon} className='w-2.5' />
                        <div className='absolute top-0 right-0 pt-14 text-base hidden group-hover:block  text-grey font-medium text-gray-600' >
                            <div className='min-w-48 flex flex-col gap-4  rounded p-4' style={{ backgroundColor: `${(theme === '#0f1214') ? '#0a5' : '#fde'}`, color: `${(theme === '#0f1214') ? 'white' : 'black'}` }}>
                                <p onClick={() => navigate("/my-profile")} className={` cursor-pointer ${theme === '#0f1214' ? 'hover:text-[#0ef]' : ' hover:text-[gray]'}`}>My Profile</p>
                                <p onClick={() => navigate("my-appointment")} className={` cursor-pointer ${theme === '#0f1214' ? 'hover:text-[#0ef]' : ' hover:text-[gray]'}`}>My Appointment</p>
                                <p onClick={LogOut} className={` cursor-pointer ${theme === '#0f1214' ? 'hover:text-[#0ef]' : ' hover:text-[gray]'}`}>Logout</p>
                            </div>
                        </div>
                    </div>
                        :
                        <button onClick={() => navigate("/login")} className='bg-primary rounded-full px-8 py-3 text-white hidden md:block'>Create Account</button>
                }
                <p className='md:hidden w-6 z-50 text-[25px] ' style={{ zIndex: "1" }} onClick={() => setshowMenu(true)} src={assets.menu_icon}>
                    <span className='bi bi-list-nested'></span>
                </p>
                <div style={{ backgroundColor: `${(theme === '#0f1214') ? '#0f1214' : 'white'}`, color: `${(theme === '#0f1214') ? 'white' : 'black'}` }} className={`${showMenu ? "w-full fixed " : "h-0 w-0"} md:hidden right-0 top-0 bottom-0 mt-3 p-2 z-20 overflow-hidden transition-all`}>
                    <div className='flex items-center justify-between'>
                        <img style={{ backgroundColor: `${theme === '#0f1214' ? 'white' : ''}` }} className='sm:w-52 mb-2 cursor-pointer h-[60px]' src={`${theme === '#0f1214' ? assets.logo2 : assets.logo}`} alt='' />

                        <img style={{ backgroundColor: `${(theme === '#0f1214') ? '#0ef' : 'white'}`, zIndex: "999", borderRadius: "50%", color: `${(theme === '#0f1214') ? 'white' : 'black'}` }} className="w-7" onClick={() => setshowMenu(false)} src={assets.cross_icon} />
                    </div>
                    <ul className='flex flex-col items-center gap-2 mt-5 text-lg font-medium'>
                        <NavLink onClick={() => setshowMenu(false)} to="/"><p className='py-1 px-10 rounded-lg'>Home</p></NavLink>
                        <NavLink onClick={() => setshowMenu(false)} to="/doctors"><p className='py-1 px-10 rounded-lg'>All Doctors</p></NavLink>
                        <NavLink onClick={() => setshowMenu(false)} to="/about"><p className='py-1 px-10 rounded-lg'>About</p></NavLink>
                        <NavLink onClick={() => setshowMenu(false)} to="/contact"><p className='py-1 px-10 rounded-lg'>Contact</p></NavLink>

                        <DarkModeSwitch
                            style={{ margin: '1rem' }}
                            checked={isDarkMode}
                            onChange={toggleDarkMode}
                            // onClick={() =>  setshowMenu(false)}
                            size={40}
                        />

                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Navbar