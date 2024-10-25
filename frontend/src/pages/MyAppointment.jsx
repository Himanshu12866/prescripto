/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const MyAppointment = () => {

  const { backendURL, token, getDrData } = useContext(AppContext)
  const [appData, setAppData] = useState([])
  const month = [" ", "Jan", "Fer", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const SlotFormat = (slotDate) => {
    const formattedTime = slotDate.split("-");
    return formattedTime[0] + " " + month[Number(formattedTime[1])] + " " + formattedTime[2]
  }

  const appointmentInfo = async () => {
    try {
      const { data } = await axios.get(backendURL + "/api/user/appointments", { headers: { token } })
      console.log(data.appointments)
      if (data.success) {
        setAppData(data.appointments.reverse())

        toast.success("Appoinment Data Loaded Successfully. 😊")
      }
    } catch (error) {
      toast.error("Something Went Wrong 😵‍💫")
    }
  }

  // const cancelAppointment = async (appointmentId) => {
  //   try {
  //     console.log(appointmentId)
  //     const { data } = await axios.post(backendURL + '/api/user/cancel-appointment' + { appointmentId }, { headers: { token } })
  //     if (data.success) {
  //       toast.success("Appointment Cancelled")
  //       appointmentInfo()
  //     }
  //     else {
  //       toast.error("Failed to Cancel Appointment")
  //     }
  //   } catch (error) {
  //     toast.error("Something Went Wrong 😵‍💫")
  //   }


  // }
  const cancelAppointment = async (appointmentId) => {
    try {

      const { data } = await axios.post(`${backendURL}/api/user/cancel-appointment`,
        { appointmentId },
        { headers: { token } }
      );
      if (data.success) {
        toast.success("Appointment Cancelled 😊");
        appointmentInfo();
        getDrData();
      } else {
        toast.error("Failed to Cancel Appointment");
      }
    } catch (error) {
      toast.error("Something Went Wrong 😵‍💫");
    }
  };


  const appointmentPay = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendURL + "/api/user/payment" + { appointmentId }, { headers: { token } })
      if (data.success) {
        console.log(data.success)
      }
    } catch (error) {
      toast.error("Payment Failed")
    }
  }
  useEffect(() => {
    if (token) {
      appointmentInfo();
    }

  }, [token])
  return (
    <div>
      <h1 className='text-2xl font-medium py-2 px-2'>Your Appointements</h1>
      <div className='flex flex-col w-[80%]l '>
        {
          appData.map((item, index) =>
            <div key={index} className='flex sm:justify-between flex-col sm:flex-row m-1'>
              <div className='p-2 m-1 sm:w-44 flex items-center justify-center  bg-[#e0e0e0]'>
                <img className='h-[150px] sm:h-[180px] mix-blend-multiply' src={item.docData.image} />
              </div>
              <div className='sm:w-[60%] text-xs p-2 '>
                <p className='font-medium text-[20px] py-2 border-b-4 border-[#6e8d6e] text-[#333366] bi bi-person-heart'> &nbsp;{item.docData.name} <span className='text-[blue] bi bi-check-circle-fill'></span></p>
                <p className='text-[14px] font-medium text-[#006633] bi bi-magic py-1 '> &nbsp;<span className=' font-medium text-[#333366]'>Speciality :</span> {item.docData.speciality}</p>
                <p className='font-medium text-[16px] py-1 text-[#333300]'><span className='bi bi-house-heart'></span> Address :</p>
                <span className='text-[14px] font-medium text-[#30a29c] '>{item.docData.address.line1} ,</span>
                <span className='text-[14px] font-medium text-[#30a29c]  '>{item.docData.address.line2}</span>
                <p className='font-medium text-[16px] py-2 text-[red] bi bi-calendar3'>&nbsp; Appoinment:</p>
                <p className='text-sm font-medium text-[#621d59]'>Date :<span> {SlotFormat(item.slotDate)}</span></p>
                <p className='text-sm font-medium text-[#621d59] '>Time :<span> {item.slotTime}</span></p>

              </div>
              <div className='flex flex-col gap-6 sm:w-[20%] mr-2 justify-center'>
                {!item.cancelled && <button onClick={() => { appointmentPay(item._id) }} className=' py-2 hover:bg-[black] hover:text-white transition-all duration-200 border'>Pay Online</button>}
                {!item.cancelled && <button onClick={() => cancelAppointment(item._id)} className='py-2 hover:bg-[#ff5f5f] hover:text-white transition-all duration-200 border'>Cancel Appointment</button>}
                {item.cancelled && <button disabled className='py-2 bg-[#4a45458f] text-white border'>Appointment Cancelled</button>}
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default MyAppointment