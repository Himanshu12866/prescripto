/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const MyAppointment = () => {

  const { backendURL, token } = useContext(AppContext)
  const [appData, setAppData] = useState([])

  const appointmentInfo = async () => {
    try {
      const { data } = await axios.get(backendURL + "/api/user/appointments", { headers: { token } })
      console.log(data.appointments)
      if (data.success) {
        setAppData(data.appointments.reverse())
        console.log(data.appointments)
        toast.success("Appoinment Data Loaded Successfully")
      }
    } catch (error) {
      toast.error("Something Went Wrong")
    }
  }
  useEffect(() => {
    if (token) {
      appointmentInfo()
    }
  }, [token])
  return (
    <div>
      <h1>booked</h1>
    </div>
  )
}

export default MyAppointment