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
        toast.success("Appoinment Data Loaded Successfully. 😊")
      }
    } catch (error) {
      toast.error("Something Went Wrong 😵‍💫")
    }
  }
  useEffect(() => {
    if (token) {
      appointmentInfo()
    }
  }, [token])
  return (
    <div>
      <h1 className='border-b-4 text-2xl font-medium py-2 px-2'>Your Appointements</h1>
      <div className='flex flex-col w-[80%]l '>
        {
          appData.map((item, index) =>
            <div key={index} className='flex sm:justify-between flex-col sm:flex-row m-1 border border-[red]'>
              <div className='p-2 m-1 w-44 bg-[#e0e0e0]'>
                <img src={item.docData.image} />
              </div>
              <div className='w-full'>
                <p>{item.docData.name}</p>
                <p>{item.docData.speciality}</p>
                <p>Address :</p>
                <p>{item.docData.address.line1}</p>
                <p>{item.docData.address.line2}</p>
                <p>Appoinment:</p>
                <p>Date :<span> {item.slotDate}</span></p>
                <p>Time :<span> {item.slotTime}</span></p>
              </div>
              <div className='flex flex-col gap-3 justify-center'>
              <button>Pay Online</button>
              <button>Cancel Appointment</button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default MyAppointment