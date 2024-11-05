/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'

import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const MyProfile = () => {
    const { userData, setUserData, token, backendURL, userProfile , theme } = useContext(AppContext)
    const [isEdit, setIsEdit] = useState(false)
    const [image, setImage] = useState(false)

    const updateUser = async () => {
        try {
            const formData = new FormData()
            formData.append('name', userData.name)
            formData.append('phone', userData.phone)
            formData.append('gender', userData.gender)
            formData.append('dob', userData.dob)
            formData.append("address", JSON.stringify(userData.address))
            image && formData.append('image', image)

            const { data } = await axios.post(backendURL + '/api/user/update-profile', formData, { headers: { token } })

            if (data.success) {
                toast.success(data.message)
                await userProfile()
                setImage(false)
                setIsEdit(false)
            }
            else {
                toast.error(data.error)
            }
        } catch (error) {
            console.log(error)
        }

    }
    return userData && (


        <div className='max-w-lg flex flex-col gap-2 text-sm mb-52'>
            {
                isEdit ? <label htmlFor='image' >
                    <div className='inline-block relative'>
                        <img className='w-36 h-36 rounded-full cursor-pointer opacity-100' src={image ? URL.createObjectURL(image) : userData.image} />
                        <img className='w-10 rounded cursor-pointer absolute bottom-12 right-12 bg-primary ' src={image ? "" : assets.upload_icon} />
                    </div>
                    <input onChange={(e) => setImage(e.target.files[0])} type='file' id='image' hidden />
                </label> :
                    <img alt='kadksnd' className='w-36 h-36 rounded-full' src={userData.image} />
            }
            {
                isEdit ? <input className='bg-zinc-200 rounded font-medium text-2xl mt-2 p-2 text-black' type='text' value={userData.name} onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} /> :
                 <p style={{color: `${theme === '#0f1214' ? 'white': '#4b5563'}`}} className='text-gray-800 font-medium text-2xl mt-2 p-2'>{userData.name.toUpperCase()}</p>
            }
            <hr className='bg-zinc-600 h-0.5' />
            <p style={{color: `${theme === '#0f1214' ? '#0ef': '#4b5563'}`}} className='p-1 underline underline-offset-1 text-gray-600 font-medium text-md'>CONTACT INFORMATION</p>
            <div className='grid grid-cols-[1fr_3fr] mt-1 gap-y-2.5'>
                <p style={{color: `${theme === '#0f1214' ? 'white': '#fa54af'}`}} className='font-medium'>Email :</p>
                <p style={{color: `${theme === '#0f1214' ? '#fff': '#fa54af'}`}} className='text-blue-600'>{userData.email.toUpperCase()}</p>
                <p style={{color: `${theme === '#0f1214' ? 'white': '#fa54af'}`}} className='font-medium'>Phone :</p>
                {
                    isEdit ? <input type='text' className='bg-zinc-200 p-1 text-black' value={userData.phone} onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} /> : <p className='text-blue-600'>{userData.phone}</p>
                }
                <p style={{color: `${theme === '#0f1214' ? 'white': '#fa54af'}`}} className='font-medium'>Address : </p>
                {
                    isEdit ? <p>
                        <input className='bg-zinc-200 p-1 text-black w-full' type='text' value={userData.address.line1} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} />
                        <br />
                        <input className='bg-zinc-200 p-1 mt-1 w-full text-black' type='text' value={userData.address.line2} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} />
                    </p> :
                        <p className='text-blue-600'>{userData.address.line1.toUpperCase()} <br /> {userData.address.line2.toUpperCase()}</p>
                }
            </div>
            <p style={{color: `${theme === '#0f1214' ? '#0ef': '#fa54af'}`}} className='p-1 underline underline-offset-1 text-gray-600 font-medium text-md'>BASIC INFORMATION</p>
            <div className='grid grid-cols-[1fr_3fr] mt-1 gap-y-2.5'>
                <p style={{color: `${theme === '#0f1214' ? 'white': '#fa54af'}`}} className='font-medium'>Gender</p>
                {
                    isEdit ? <select className='bg-zinc-200 p-1 text-black' type='text' value={userData.gender} onChange={(e) =>
                        setUserData(prev => ({ ...prev, gender: e.target.value }))}>
                        <option value="Not Selected">Not Selected</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select> :
                        <p className='text-blue-600'>{userData.gender.toUpperCase()}</p>
                }
                <p style={{color: `${theme === '#0f1214' ? 'white': '#fa54af'}`}} className='font-medium'>DOB :</p> {
                    isEdit ? <input className='bg-zinc-200 p-1 text-black' type='date' value={userData.dob} onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} /> : <p className='text-blue-600'>{userData.dob}</p>
                }
                {
                    isEdit ? <div className='flex flex-row w-52'>
                        <button   className={` border border-gray-700 ${theme==='#0f1214' ? 'border-[#0ef] text-white': 'border-gray-700 text-[black]'} rounded-full text-center text-black p-2 px-3 m-1 hover:bg-slate-600 hover:text-white transition-all duration-500`} onClick={updateUser}>Save Detials</button> 
                        <button   className={ `hover:bg-slate-600 hover:text-gray-200 ${theme==='#0f1214' ? 'border-[#0ef] text-white': 'border-gray-700 text-[black]'} transition-all duration-500 px-6 border border-gray-700 text-center text-black rounded-full p-2 m-1`} onClick={() => setIsEdit(false)}>Cancel</button>
                    </div>
                        : <button   className={`rounded-full text-center text-black border ${theme==='#0f1214' ? 'border-[#0ef] text-white': 'border-gray-700 text-[black]'} border-gray-700 p-2 m-1 hover:bg-slate-600 hover:text-gray-200 transition-all duration-500`} onClick={() => setIsEdit(true)}>Edit Detials</button>
                }
            </div>
        </div>
    )
}

export default MyProfile