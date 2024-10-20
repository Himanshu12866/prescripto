/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
    const [userData, setUserData] = useState({
        name: 'Himanshu',
        email: 'himanshu@gmail.com',
        phone: '1234567890',
        image: assets.profile_pic,
        address: {
            line1: "Satna",
            line2: "Hyd"
        },
        gender: "Male",
        dob: "2002-10-10"
    })
    const [isEdit, setIsEdit] = useState(false)
    return (
        <div className='max-w-lg flex flex-col gap-2 text-sm mb-52'>
            <img alt='kadksnd' className='w-36 rounded' src={userData.image} />
            {
                isEdit ? <input className='bg-zinc-200 rounded font-medium text-2xl mt-2 p-2 text-black' type='text' value={userData.name} onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} /> : <p className='text-gray-800 font-medium text-2xl mt-2 p-2'>{userData.name.toUpperCase()}</p>
            }
            <hr className='bg-zinc-600 h-0.5' />
            <p className='p-1 underline underline-offset-1 text-gray-600 font-medium text-md'>CONTACT INFORMATION</p>
            <div className='grid grid-cols-[1fr_3fr] mt-1 gap-y-2.5'>
                <p className='font-medium'>Email :</p>
                <p className='text-blue-600'>{userData.email.toUpperCase()}</p>
                <p className='font-medium'>Phone :</p>
                {
                    isEdit ? <input type='text' className='bg-zinc-200 p-1 text-black' value={userData.phone} onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} /> : <p className='text-blue-600'>{userData.phone}</p>
                }
                <p className='font-medium'>Address : </p>
                {
                    isEdit ? <p>
                        <input className='bg-zinc-200 p-1 text-black w-full' type='text' value={userData.address.line1} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} />
                        <br />
                        <input className='bg-zinc-200 p-1 mt-1 w-full text-black' type='text' value={userData.address.line2} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} />
                    </p> :
                        <p className='text-blue-600'>{userData.address.line1.toUpperCase()} <br /> {userData.address.line2.toUpperCase()}</p>
                }
            </div>
            <p className='p-1 underline underline-offset-1 text-gray-600 font-medium text-md'>BASIC INFORMATION</p>
            <div className='grid grid-cols-[1fr_3fr] mt-1 gap-y-2.5'>
                <p className='font-medium'>Gender</p>
                {
                    isEdit ? <select className='bg-zinc-200 p-1 text-black' type='text' value={userData.gender} onChange={(e) =>
                        setUserData(prev => ({ ...prev, gender: e.target.value }))}>
                        <option value="Not Selected">Not Selected</option>
                        <option value="Male">Male</option>
                        <option value="Female">Male</option>
                    </select> :
                        <p className='text-blue-600'>{userData.gender.toUpperCase()}</p>
                }
                <p className='font-medium'>DOB :</p> {
                    isEdit ? <input className='bg-zinc-200 p-1 text-black' type='date' value={userData.dob} onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} /> : <p className='text-blue-600'>{userData.dob}</p>
                }
                {
                    isEdit ? <div className='flex flex-row w-52'>
                        <button className=' border border-gray-700 rounded-full text-center text-black p-2 px-3 m-1 hover:bg-slate-600 hover:text-gray-200 transition-all duration-500' onClick={() => setIsEdit(false)}>Save Detials</button> <button className='hover:bg-slate-600 hover:text-gray-200 transition-all duration-500 px-6 border border-gray-700 text-center text-black rounded-full p-2 m-1' onClick={() => setIsEdit(false)}>Cancel</button>
                    </div>
                        : <button className='rounded-full text-center text-black border border-gray-700 p-2 m-1 hover:bg-slate-600 hover:text-gray-200 transition-all duration-500' onClick={() => setIsEdit(true)}>Edit Detials</button>
                }
            </div>
        </div>
    )
}

export default MyProfile