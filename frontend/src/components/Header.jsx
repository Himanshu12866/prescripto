/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
const Header = () => {
    const { theme, textTheme } = useContext(AppContext)
    let navigate = useNavigate()
    return (
        <div style={{backgroundColor:`${(theme === 'black') ? '#950101':'#5f6fff'}`}} className='flex flex-col md:flex-row flex-wrap  rounded-lg px-6 -z-50 md:px-10 lg:px-20'>
            <div className='md:w-1/2 flex flex-col justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] '>
                <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-10' >Book Appointment <br /> WithTrusted Doctors</p>
                <div className='flex flex-col md:flex-row gap-3 items-center text-white font-light text-sm'>
                    <img className='w-28' src={assets.group_profiles} alt='pro'></img>
                    <p>Simply browse through our extensive list of doctors , <br className='hidden sm:block' /> schedule appointment hassle-free</p>
                </div>
                <button style={{backgroundColor:`${(theme === 'black') ? 'black':'white'}` , color:`${(theme === 'black') ? 'white' : 'black'}`}} onClick={() => { navigate('/doctors') }} className='flex items-center gap-2  rounded-full py-3 px-8 me-10 w-8/10 font-medium  text-sm m-auto md:m-0 hover:scale-105 transition-all duration-200'>
                    Book an Appointment <img className='w-3' src={assets.arrow_icon}></img>
                </button>
            </div>
            <div className='md:w-1/2 relative'>
                <img className='w-full md:absolute bottom-0  h-auto rounded-lg' src={assets.header_img} />
            </div>

        </div>
    )
}

export default Header