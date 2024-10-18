/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import { AdminContext } from '../context/AdminContext';
import axios from "axios"
const Login = () => {

    const [state, setState] = useState('Admin');

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const { setAToken, backenURL } = useContext(AdminContext)

    function onChange(value) {

        console.log("Captcha value:", value);
    }
    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {
            if (state === "Admin") {
                const { data } = await axios.post(backenURL + '/api/admin/login', { email, password })
                if (data.success) {
                    console.log(data.token)
                }
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='min-h-[100vh]  flex items-center'>
            <div className='flex flex-col gap-3 items-start m-auto p-8  min-h-[330px] sm:min-w-80 sm:min-h-[340px] border shadow-lg rounded-xl text-[#958a8a]'>
                <p className='text-center w-full font-medium text-2xl'><span className='text-[#6464c1]'>{state}</span> Login</p>
                <div className='flex flex-col gap-2 w-full'>
                    <p className='sm:text-xl text-black'>Email:</p>
                    <input onClick={(e) => setEmail(e.target.value)} value={email} className='w-full border p-1  border-[#746060] shadow-' type='text' />
                </div>
                <div className='flex flex-col gap-2 my-2 w-full'>
                    <p className='sm:text-xl text-black'>Password:</p>
                    <input onClick={(e) => setPassword(e.target.value)} value={password} className='w-full border p-1  border-gray-500' type='password' />
                </div>
                <div>
                    <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={onChange}
                    />
                </div>
                <div className='w-full'>
                    <button className='text-center w-full p-2 bg-[#3aa4d5] text-white hover:bg-[#7c7c88] transition-all duration-400'>Login</button>
                </div>
                {
                    state === "Admin" ? <p className='text-black text-sm font-medium'>Doctor Login? <span className='underline hover:text-[blue] cursor-pointer' onClick={() => setState("Doctor")}>Click here</span></p> : <p className='text-black text-sm font-medium'>Admin Login? <span className='underline hover:text-[blue] cursor-pointer' onClick={() => setState("Admin")}>Click here</span></p>
                }
            </div>
        </form>
    )
}

export default Login