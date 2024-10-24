/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>

            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>
                {/* Left */}
                <div>
                    <img className='mb-5 w-40' src={assets.logo} />
                    <p className='w-full md:w-2/3 text-gray-900 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>


                {/* Center */}
                <div>
                    <p className='text-xl font-bold mb-5'>Company</p>
                    <ul className='flex  flex-col gap-2 text-gray-900'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/* Right  */}
                <div>
                    <p className='text-xl font-bold mb-5'>Get In Touch</p>
                    <ul className='flex  flex-col gap-2 text-gray-900'>
                        <li>011-2553-2553</li>
                        <li>Dr@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr className='text-black font-bold'></hr>
            <div style={{textAlign:"center"}} className='text-cener text-gray-600'>
                <p>Copy Rights 2024 &Copy; All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer