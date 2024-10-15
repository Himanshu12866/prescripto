/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../assets/assets'
const Contacts = () => {
  return (
    <div>
      <div className="w-full text-center">
        <p className="text-2xl text-gray-400">
          CONTACT <span className=" font-medium text-gray-800">US</span>
        </p>
      </div>
      <div className='flex flex-col md mb-28 text-sm md:flex-row items-center my-10 justify-center gap-10'>
        <img style={{ width: "400px", height: "auto" }} src={assets.contact_image} />
        <div className='flex flex-col gap-6'>
          <p className='font-medium text-xl text-gray-700'>OUR OFFICE</p>
          <div>
            <p className='text-gray-500 font-medium'>Ameerpet , Hyderabad</p>
            <p className='text-gray-500 font-medium'>Telangana, India</p>
          </div>
          <div>
            <p className='text-gray-500 font-medium'>Tel : 2011-2553-2553</p>
            <p className='text-gray-500 font-medium'>Email: dr@gmail.com</p>
          </div>
          <p className='font-medium text-gray-700 text-xl'>CAREERS AT PRESCRIPTO</p>
          <p>Learn more about our teams and job openings.</p>
          <button className='text-center py-4 border border-gray-800  px-10 hover:bg-slate-900 hover:text-white transition-all duration-300'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contacts