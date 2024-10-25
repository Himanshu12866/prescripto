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
              <div className='p-2 m-1 sm:w-44   bg-[#e0e0e0]'>
                <img className='sm:h-[180px] mix-blend-multiply' src={item.docData.image} />
              </div>
              <div className='sm:w-[60%] text-xs p-2 '>
                <p className='font-medium text-[20px] py-1 text-[#333366]'>{item.docData.name}</p>
                <p className='text-[14px] font-medium text-[#006633] '><span className=' font-normal text-[#333366]'>Speciality :</span> {item.docData.speciality}</p>
                <p className='font-medium text-[16px] py-1 text-[#333300]'>Address :</p>
                <span className='text-[14px] font-medium text-[#30a29c] '>{item.docData.address.line1} ,</span>
                <span className='text-[14px] font-medium text-[#30a29c]  '>{item.docData.address.line2}</span>
                <p className='font-medium text-[16px] py-1 text-[red]'>Appoinment:</p>
                <p className='text-sm font-medium text-[#621d59]'>Date :<span> {item.slotDate}</span></p>
                <p className='text-sm font-medium text-[#621d59]'>Time :<span> {item.slotTime}</span></p>
              </div>
              <div className='flex flex-col gap-4 sm:w-[20%] mr-2 justify-center'>
                <button className='bg-[pink] py-2'>Pay Online</button>
                <button className='bg-[blue] py-2'>Cancel Appointment</button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default MyAppointment