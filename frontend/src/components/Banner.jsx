/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Banner = () => {
    const navigate = useNavigate()
    const { token } = useContext(AppContext)
    return (
        <div className='flex bg-primary rounded-lg px-6  sm:px-10 lg:px-14 md:px-10 xl:px-16'>
            {/* Left Side  */}
            <div className='flex-1 py-8 md:py-16 lg:py-24  lg:pl-5'>
                <div className='text-xl sm:text-2xl py-2 md:text-3xl lg:text-5xl font-semibold text-white'>
                    <p>Book Appointment</p>
                    <p className='mt-4'> With 100+ Trusted Doctors</p>
                </div>
                {
                    token ? (<button onClick={() => { navigate("/doctors") }} className='bg-white rounded-full text-black text-sm sm:text-base px-8 py-3 mt-2 hover:scale-105 transition-all duration-300' >
                       Book Appointment
                    </button>
                    ) :
                        (<button onClick={() => { navigate("/login") }} className='bg-white rounded-full text-black text-sm sm:text-base px-8 py-3 mt-2 hover:scale-105 transition-all duration-300' >
                            Create Account
                        </button>
                        )

                }
            </div>

            {/* Right Side  */}
            <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
                <img className='w-full absolute right-0 bottom-0 max-w-md' src={assets.appointment_img} />
            </div>
        </div>
    )
}

export default Banner