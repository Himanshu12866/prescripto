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
        <div className='max-w-lg flex flex-col gap-2 text-sm'>
            <img alt='kadksnd' className='w-36 rounded' src={userData.image} />
            {
                isEdit ? <input className='bg-zinc-200 rounded font-medium text-2xl mt-2 p-2 text-black' type='text' value={userData.name} onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} /> : <p className='text-gray-800 font-medium text-2xl mt-2 p-2'>{userData.name}</p>
            }
            <hr className='bg-zinc-600 h-0.5' />
            <p className='p-1 underline underline-offset-1 text-gray-600 font-medium text-md'>CONTACT INFORMATION</p>
            <div className='grid grid-cols-[1fr_3fr] mt-1 gap-y-2.5'>
                <p>Email :</p>
                <p>{userData.email}</p>
                <p>Phone :</p>
                {
                    isEdit ? <input type='text' value={userData.phone} onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} /> : <p>{userData.phone}</p>
                }
                <p>Address</p>
                {
                    isEdit ? <p>
                        <input type='text' value={userData.address.line1} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} />
                        <input type='text' value={userData.address.line2} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} />
                    </p> :
                        <p>{userData.address.line1} <br /> {userData.address.line2}</p>
                }
            </div>
            <p className='p-1 underline underline-offset-1 text-gray-600 font-medium text-md'>BASIC INFORMATION</p>
            <div className='grid grid-cols-[1fr_3fr] mt-1 gap-y-2.5'>
                <p>Gender</p>
                {
                    isEdit ? <select type='text' value={userData.gender} onChange={(e) =>
                        setUserData(prev => ({ ...prev, gender: e.target.value }))}>
                        <option value="Not Selected">Not Selected</option>
                        <option value="Male">Male</option>
                        <option value="Female">Male</option>
                    </select> :
                        <p>{userData.gender}</p>
                }
                <p>DOB :</p> {
                    isEdit ? <input type='date' value={userData.dob} onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} /> : <p>{userData.dob}</p>
                }
                {
                    isEdit ? <div>
                        <button className='' onClick={() => setIsEdit(false)}>Save Detials</button> <button onClick={() => setIsEdit(false)}>Cancel</button>
                    </div>
                        : <button onClick={() => setIsEdit(true)}>Edit Detials</button>
                }
            </div>
        </div>
    )
}

export default MyProfile