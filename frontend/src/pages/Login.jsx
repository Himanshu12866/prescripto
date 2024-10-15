/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Login = () => {

    const [state, setState] = useState('Sign Up')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = async (event) => {
        email.prventDefault()

    }
    return (
        <form className='min-h-[80vh] flex items-center'>
            <div className='flex flex-col items-start p-7 sm:min-w-96 min-w-[340px] m-auto gap-3 border text-sm rounded-xl text-zinc-600 shadow-lg'>
                <p className='text-2xl font-semibold text-center w-full'>{state === "Sign Up" ? "Create Account" : "Login"}</p>
                <p>Please {state === "Sign Up" ? "sign up" : "Login"} to book appointment</p>
                <div className='w-full'>
                    <p>Full Name : </p>
                    <input className='border rounded border-zinc-400 text-gray-600 w-full p-2 my-1' type='text' onChange={(e) => setName(e.target.value)} value={name} required />
                </div>
                <div className='w-full'>
                    <p>Email : </p>
                    <input className='border rounded border-zinc-400 text-gray-600 w-full p-2 my-1' type='email' onChange={(e) => setEmail(e.target.value)} value={email} required />
                </div>
                <div className='w-full'>
                    <p>Password : </p>
                    <input className='border rounded border-zinc-400 text-gray-600 w-full p-2 my-1' type='password' onChange={(e) => setPassword(e.target.value)} value={password} required />
                </div>
                <button className='w-full p-2 my-1 bg-primary text-white font-medium rounded'>{state === "Sign Up" ? "Create Account" : "Login"}</button>
                {
                    state === "Sign Up" ?
                        <p>Already have an account?
                            <span className='text-primary cursor-pointer underline'>Login Here </span></p> :
                        <p>Create an account <span className='text-primary cursor-pointer underline'>Create here</span></p>
                }
            </div>

        </form>
    )
}

export default Login