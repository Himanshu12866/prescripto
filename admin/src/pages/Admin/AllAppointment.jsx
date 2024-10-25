// import React from 'react'

import { useContext } from "react"
import { AdminContext } from "../../context/AdminContext"
import { useEffect } from "react"

const AllAppointment = () => {
  const {appointments,  aToken, getAllAppointment } = useContext(AdminContext)
  useEffect(() => {
    console.log(appointments)
    if (aToken) {
      getAllAppointment()
    }
    else{
      console.log("no token")
    }
  },[aToken])
  return (
    <div className="w-full p-1">
    <p className=" px-5 py-3 font-medium w-full bg-black text-center text-white">All Appointment</p>
    <div className="w-full">
      <div className="border py-2 px-2 mt-3 bg-[#042613b8] text-[#decddb] font-bold hidden sm:grid grid-cols-[1fr_3fr_1fr_4fr_3fr_1fr_3fr] grid-flow-col">
        <p>Sr.No</p>
        <p>Patient</p>
        <p>Age</p>
        <p>Date & Time</p>
        <p>Doctor</p>
        <p>Fees</p>
        <p>Actions</p>
      </div>
    </div>
    {/* {
     appointments.map((item ,index) => 
      <div key={index}>
      <p>{item.userData.name}</p>

      </div>
     )
    } */}

    </div>
  )
}

export default AllAppointment