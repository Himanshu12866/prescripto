/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'

import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
const SpecialityMenu = () => {
    const { theme, textTheme } = useContext(AppContext)
    return (
        <div className='flex flex-col text-xl md:text-sm items-center md:py-16 py-12 md:gap-4 text-gray-800' id='speciality'>
            <h1 className='md:text-3xl font-medium' style={{ color: `${(theme === '#0f1214') ? 'white' : 'black'}` }}>Book Your Appointment</h1>
            <p style={{ color: `${(theme === '#0f1214') ? 'white' : 'black'}` }} className='md:w-1/2 w-full text-center text-black text-sm'>Simply browse through our extensive list of doctors  schedule appointment hassle-free</p>
            <div className='flex sm:justify-center w-full gap-4 pt-5 md:overflow-hidden overflow-x-scroll'>
                {
                    specialityData.map((item, index) =>
                        <Link onClick={() => scrollTo(0, 0)} className='flex flex-col items-center text-sm font-medium flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' to={`doctors/${item.speciality}`} key={index}>
                            <img className='w-[100px] h-[100px] rounded-full sm:w-24 mb-2' src={item.image}></img>
                            <p style={{ color: `${(theme === '#0f1214') ? 'white' : 'black'}` }}>
                                {
                                    item.speciality
                                }
                            </p>
                        </Link>

                    )
                }
            </div>
        </div>
    )
}

export default SpecialityMenu