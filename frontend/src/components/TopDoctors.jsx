/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
    const navigate = useNavigate()
    const {doctors} = useContext(AppContext)
    return (
        <div className='flex flex-col items-center my-16 gap-4 text-black md:mx:10'>
            <h1 className='text-3xl font-medium'>Top Doctors</h1>
            <p className='sm:w1/3 text-sm text-center'>Our Doctors</p>
            <div className='w-full grid grid-cols-auto gap-4 pt5 gap-y-6 px-3 sm:px-0'>
                {
                    doctors.slice(0, 10).map((item, index) => <div onClick={() => navigate(`/appointment/${item._id}`)} className='border border-blue-500 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>


                        <img className='bg-blue-50' src={item.image} alt='' />
                        <div className='p-4'>
                            <div className=' flex gap-2 text-sm text-center text-green-400 items-center'>
                                <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Availabel</p>
                            </div>
                            <p className='text-grey text-xl font-medium' >{item.name}</p>
                            <p className='text-grey text-sm ' >{item.speciality}</p>
                        </div>

                    </div>
                    )
                }
            </div>
            <button onClick={() =>{ navigate("/doctors"); scrollTo(0,0)}} className='bg-blue-300 text-grey-500 px-16 py-2 rounded-full mt-10'>More</button>
        </div>
    )
}

export default TopDoctors