/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext()
import axios from "axios"
import { toast } from "react-toastify";


const AppContextProvider = (props) => {
    const backendURL = import.meta.env.VITE_BACKEND_URL;
    const [doctors, setDoctors] = useState([]);
    const [token, setToken] = useState('')

    const getDrData = async () => {
        try {
            const { data } = await axios.get(backendURL + "/api/doctor/list")
            if (data) {
                setDoctors(data.doctors)
                toast.success(data.success)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    const values = {
        doctors, token, setToken, backendURL
    }
    useEffect(() => {
        getDrData()
    }, [token])

    return (
        <AppContext.Provider value={values}>
            {
                props.children
            }
        </AppContext.Provider>
    )
}

export default AppContextProvider