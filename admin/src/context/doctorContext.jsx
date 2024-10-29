/* eslint-disable react/prop-types */

import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";


export const DoctorContext = createContext()
const DoctorContextProvider = (props) => {
    const backendURL = import.meta.env.VITE_BACKEND_URL
    const [docToken, setDocToken] = useState(localStorage.getItem('DoctorToken') ? localStorage.getItem("DoctorToken") : "")
    const [DocAppoint, setDocAppoint] = useState([])
    const getDocAppoint = async () => {
        try {
            const { data } = await axios.get(backendURL + '/api/doctor/getappointment', { headers: { docToken } })
            if (data.success) {
                setDocAppoint(data.appointments.reverse())
            }
            else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const value = {
        docToken, setDocToken,
        backendURL, DocAppoint, setDocAppoint, getDocAppoint
    }
    return (
        <DoctorContext.Provider value={value}>
            {
                props.children
            }
        </DoctorContext.Provider>
    )
}
export default DoctorContextProvider