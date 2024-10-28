/* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
export const AdminContext = createContext()
import axios from "axios"
import { toast } from "react-toastify"


const AdminContextProvider = (props) => {
    const [doctors, setDoctors] = useState([])
    const [aToken, setAToken] = useState(localStorage.getItem('AdminToken') ? localStorage.getItem("AdminToken") : "")
    const backendURL = import.meta.env.VITE_BACKEND_URL
    const [appointments, setAppointment] = useState([{}])
    const [adminDash, setAdminDash] = useState(false)



    const getAllDoctors = async () => {
        try {
            const { data } = await axios.post(backendURL + '/api/admin/all-doctors', {}, { headers: { aToken } })
            if (data.success) {
                setDoctors(data.doctors)
            }
            else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error)
        }
    }
    const changeAvailability = async (docId) => {
        try {
            const { data } = await axios.post(backendURL + '/api/admin/change-availablity', { docId }, { headers: { aToken } })

            if (data) {
                toast.success(data.message)
                getAllDoctors()
            }
            else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error)

        }

    }

    const getAllAppointment = async () => {
        try {
            const { data } = await axios.get(backendURL + "/api/admin/appointment", { headers: { aToken } })
            if (data.success) {
                setAppointment(data.appointments)
                console.log(appointments)
            }
            else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error)
        }
    }
     
    const cancelAppointmentAdmin = async (appointmentId) => {
        try {
            const { data } = await axios.post(backendURL + '/api/admin/cancelAppointmentAdmin', { appointmentId }, { headers: { aToken } })
            if (data.success) {
                toast.success(data.message)
                getAllAppointment()
            }
            else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error)

        }
    }

    const getAdminDash = async () => {
        try {
            const { data } = await axios.get(backendURL + "/api/admin/dashAdmin", { headers: { aToken } })
           
            setAdminDash(data.Dashdata)
            if (data.success) {
                // setAdminDash({...data.Dashdata})
                console.log(adminDash)
                toast.success("Data Loaded Successfully")
            }
            else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error("Some Server Issue 😵‍💫.")
            console.log(error)

        }
    }
    const value = {
        aToken,
        setAToken,
        backendURL,
        doctors,
        getAllDoctors,
        changeAvailability,
        appointments,
        setAppointment,
        getAllAppointment,
        cancelAppointmentAdmin,
        getAdminDash,
        adminDash,
        setAdminDash
    }
    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}
export default AdminContextProvider