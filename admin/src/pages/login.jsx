/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import { AdminContext } from '../context/AdminContext';
import axios from "axios"
import { toast } from "react-toastify"
import { DoctorContext } from '../context/doctorContext';
import{ AppContext } from '../context/appContext'
import { assets } from '../assets/assets';
const Login = () => {

    const [state, setState] = useState('Admin');

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const { setAToken, backendURL } = useContext(AdminContext)
    const { docToken, setDocToken } = useContext(DoctorContext)
    const { theme, toggleDarkMode, isDarkMode } = useContext(AppContext)


    function onChange(value) {

        console.log("Captcha value:", value);
    }
    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {
            if (state === "Admin") {
                const { data } = await axios.post(backendURL + '/api/admin/login', { email, password })
                if (data.success) {
                    localStorage.setItem("AdminToken", data.token)
                    setAToken(data.token)
                    toast.success("Login Success")
                }
                else {
                    console.log(data)
                    toast.error("Invalid Credentials")
                }
            }
            else {
                const { data } = await axios.post(backendURL + '/api/doctor/doctorlogin', { email, password })
                if (data.success) {
                    localStorage.setItem("DoctorToken", data.token)
                    setDocToken(data.token)
                    console.log(docToken)
                    toast.success("Login Success")
                }
                else {
                    toast.error("Invalid Email Or Passowrd")
                }
            }

        } catch (error) {
            toast.error("Invalid Email or Password")
        }
    }

    return (
        <div  style={{ backgroundColor: `${theme === '#0f1214' ? '#0f1214' : '#fff'}` }}>
            <div className='flex justify-between mx-0 pt-3 sm:mx-32'>
                <div>
                <img  style={{ backgroundColor: `${theme === '#0f1214' ? 'white' : ''}` }} className='sm:w-52 cursor-pointer h-[60px]' src={`${theme === '#0f1214' ? assets.logo2 : assets.logo}`} alt='someimage' />

                </div>
                <DarkModeSwitch
                    style={{ margin: '1rem' }}
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                    size={40}
                />
            </div>


            <form onSubmit={onSubmitHandler} className='min-h-[100vh] mt-[-40px] flex items-center'>
                <div className={`flex flex-col gap-3 items-start m-auto p-8  min-h-[330px] sm:min-w-80 sm:min-h-[340px] border shadow-lg rounded-xl text-[#958a8a]`}>
                    <p className={`text-center w-full font-semibold text-2xl ${theme === '#0f1214' ? 'text-[#fff]':'text-[black]' }`}><span className={`${theme === '#0f1214' ? 'text-[#0ef]':'text-[#4848f7]' }`}>{state}</span> Login</p>
                    <div className='flex flex-col gap-2 w-full'>
                        <p className='sm:text-xl text-black'>Email:</p>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} className='w-full border p-1  border-[#746060] shadow-' type='text' />
                    </div>
                    <div className='flex flex-col gap-2 my-2 w-full'>
                        <p className='sm:text-xl text-black'>Password:</p>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} className='w-full border p-2 rounded  border-gray-500' type='password' />
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
        </div>
    )
}

export default Login