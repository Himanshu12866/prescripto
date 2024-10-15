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
        <div>
            <img src={userData.image} />
            {
                isEdit ? <input type='text' value={userData.name} onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} /> : <p>{userData.name}</p>
            }
            <hr />
            <div>
                <p>CONTACT INFORMATION</p>
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
        </div>
    )
}

export default MyProfile