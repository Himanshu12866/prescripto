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
    const [appoinments, setAppointment] = useState([{}])

    const getAllDoctors = async () => {
        try {
            const { data } = await axios.post(backendURL + '/api/admin/all-doctors', {}, { headers: { aToken } })
            if (data.success) {
                setDoctors(data.doctors)
                // console.log(data.doctors)
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
            }
            else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error)
        }
    }
    const value = {
        aToken, setAToken, backendURL, doctors, getAllDoctors,
        changeAvailability, getAllAppointment, appoinments, setAppointment
    }
    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}
export default AdminContextProvider