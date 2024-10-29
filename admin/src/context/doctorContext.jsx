/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";


export const DoctorContext = createContext()
const DoctorContextProvider = (props) => {
    const backendURL = import.meta.env.VITE_BACKEND_URL
    const [docToken, setDocToken] = useState(localStorage.getItem('DoctorToken') ? localStorage.getItem("DoctorToken") : "")
    const [DocAppoint, setDocAppoint] = useState([])
    const [dashData, setDashData] = useState(false)
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

    const acceptAppointment = async (appointmentId) => {
        try {
            const { data } = await axios.post(backendURL + '/api/doctor/approveappoint', { appointmentId }, { headers: { docToken } })
            if (data.success) {
                getDocAppoint()
                toast.success("Appointment Approved")
            }

            else {
                toast.error(data.error)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const rejectAppointment = async (appointmentId) => {
        try {
            const { data } = await axios.post(backendURL + '/api/doctor/cancelappoint', { appointmentId }, { headers: { docToken } })
            if (data.success) {
                getDocAppoint()
                toast.success("Appointment Cancelled")
            }
            else {
                toast.error(data.error)
            }
        } catch (error) {
            console.log(error)
        }

    }
    const getDashData = async () => {
        try {
            const { data } = await axios.get(backendURL + "/api/doctor/docdash" , {headers:{docToken}})
            if (data.success) {
                setDashData(data.dashData)
                console.log(data.dashData)
                toast.success("Data Loaded Successfully")
                console.log(dashData)
            }
            else {
                toast.error(data.error)
            }
        } catch (error) {
            console.log(error)
        }
    }


    const value = {
        docToken, setDocToken,
        backendURL, DocAppoint, setDocAppoint, getDocAppoint, acceptAppointment, rejectAppointment, dashData , setDashData, getDashData
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