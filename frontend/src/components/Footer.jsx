/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { assets } from '../assets/assets'

import { LinearProgress, Tooltip, Button } from "@mui/material"
import { AppContext } from '../context/AppContext'
const Footer = () => {
    const { textTheme, theme, token } = useContext(AppContext)
    return (
        <div className='md:mx-10'>

            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>
                {/* Left */}
                <div>
                    <img style={{ backgroundColor: `${theme === '#0f1214' ? 'white' : ''}` }} className='sm:w-52 mb-2 cursor-pointer h-[60px]' src={`${theme === '#0f1214' ? assets.logo2 : assets.logo}`} alt='iamgename' />

                    <p style={{ backgroundColor: `${(theme === '#0f1214') ? '#0f1214' : 'white'}`, color: `${(theme === '#0f1214') ? 'white' : 'black'}` }} className='w-full md:w-2/3 text-gray-900 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>


                {/* Center */}
                <div>
                    <p style={{ backgroundColor: `${(theme === '#0f1214') ? '#0f1214' : 'white'}`, color: `${(theme === '#0f1214') ? 'white' : 'black'}` }} className='text-xl font-bold mb-5'>Company</p>
                    <ul style={{ backgroundColor: `${(theme === '#0f1214') ? '#0f1214' : 'white'}`, color: `${(theme === '#0f1214') ? 'white' : 'black'}` }} className='flex  flex-col gap-2 text-gray-900'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                        {
                            token ? null : <li className=''><Button variant='contained' color='error' ><a href='https://drbookwebapp-admin.onrender.com/'>Admin Login</a></Button></li>

                        }                    </ul>
                </div>

                {/* Right  */}
                <div>
                    <p style={{ backgroundColor: `${(theme === '#0f1214') ? '#0f1214' : 'white'}`, color: `${(theme === '#0f1214') ? 'white' : 'black'}` }} className='text-xl font-bold mb-5'>Get In Touch</p>
                    <ul style={{ backgroundColor: `${(theme === '#0f1214') ? '#0f1214' : 'white'}`, color: `${(theme === '#0f1214') ? 'white' : 'black'}` }} className='flex  flex-col gap-2 text-gray-900'>
                        <li>011-2553-2553</li>
                        <li>Dr@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr className='text-black font-bold'></hr>
            <div style={{ textAlign: "center" }} className='text-center my-1 mb-5  bg-[black]  text-white'>
                {/* <p className='py-2 hover:bg-[#6a6767]  transition-all duration-200'>Designed By <a className='text-[#35ffc6] font-medium' href='https://github.com/himanshu12866'>UI Dev</a> </p> */}
                <Tooltip title="GitHub" size="md" variant="contained">
                    <Button variant="solid">Designed By &nbsp;<a className='text-[#35ffc6] font-medium' href='https://github.com/himanshu12866'>UI Dev</a></Button>
                </Tooltip>
            </div>
            <LinearProgress className='my-2 mb-5' />
        </div>
    )
}

export default Footer