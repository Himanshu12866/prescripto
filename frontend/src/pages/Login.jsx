/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
// import ReCAPTCHA from "react-google-recaptcha";
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [state, setState] = useState('Sign Up');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    let navigate = useNavigate()
    const { backendURL, token, setToken } = useContext(AppContext);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form submission and page reload
        console.log(token);

        try {
            if (state === "Sign Up") {
                const { data } = await axios.post(backendURL + "/api/user/register", { name, password, email });
                if (data.success) { // Typo fixed here
                    localStorage.setItem("token", data.token);
                    setToken(data.token);
                    toast.success("Account created successfully 🙄");
                } else {
                    toast.error(data.message);
                }

            } else {
                const { data } = await axios.post(backendURL + "/api/user/login", { email, password });
                if (data.success) { // Typo fixed here
                    localStorage.setItem("token", data.token);
                    setToken(data.token);
                    toast.success("Login successful 😊");
                } else {
                    toast.error(data.message);
                }
            }
        } catch (error) {
            console.log(error);
            toast.error("An error occurred. Please try again. 😵‍💫");
        }
    };
    useEffect(() => {
        if (token) {
            navigate("/")
        }
    }, [token])

    return (
        <form onSubmit={handleSubmit} className='min-h-[80vh] flex items-center'>
            <div className='flex flex-col items-start p-7 sm:min-w-96 min-w-[340px] m-auto gap-3 border text-sm rounded-xl text-zinc-600 shadow-lg'>
                <p className='text-2xl font-semibold text-center w-full'>{state === "Sign Up" ? "Create Account" : "Login"}</p>
                <p>Please {state === "Sign Up" ? "sign up" : "Login"} to book appointment</p>
                {
                    state === "Sign Up" ? <div className='w-full'>
                        <p>Full Name : </p>
                        <input className='border rounded border-zinc-400 text-gray-600 w-full p-2 my-1' type='text' onChange={(e) => setName(e.target.value)} value={name} required />
                    </div> : null
                }
                <div className='w-full'>
                    <p>Email : </p>
                    <input className='border rounded border-zinc-400 text-gray-600 w-full p-2 my-1' type='email' onChange={(e) => setEmail(e.target.value)} value={email} required />
                </div>
                <div className='w-full'>
                    <p>Password : </p>
                    <input className='border rounded border-zinc-400 text-gray-600 w-full p-2 my-1' type='password' onChange={(e) => setPassword(e.target.value)} value={password} required />
                </div>
                <button type='submit' className={`w-full p-2 my-1  text-white font-medium rounded bg-primary`}>{state === "Sign Up" ? "Create Account" : "Login"}</button>
                {
                    state === "Sign Up" ?
                        <p>Already have an account?
                            <span className='text-primary cursor-pointer underline' onClick={() => setState("Login")}>Login Here </span></p> :
                        <p>Create an account? <span className='text-primary cursor-pointer underline' onClick={() => setState("Sign Up")}> Create here</span></p>
                }
            </div>
        </form>
    );
};

export default Login;
