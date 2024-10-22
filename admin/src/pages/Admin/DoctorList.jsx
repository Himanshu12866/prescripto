/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react'

import { useContext, useEffect } from "react"
import { AdminContext } from "../../context/AdminContext"

const DoctorList = () => {

  const { doctors, aToken, getAllDoctors } = useContext(AdminContext)

  useEffect(() => {

    if (aToken) {
      getAllDoctors()
      console.log(doctors)
    }

  }, [aToken])

  return (

    <div className="bg-[#f8f4f4] w-full p-2">
      <h1 className="font-medium text-xl px-16 sm:px-10 sm:my-5">All Doctors List</h1>

      <div className="flex flex-row flex-wrap p-2">
        {
          doctors.map((item, index) =>
            <div className=" w-full sm:w-52 border m-2 h-auto rounded" key={index}>
              <img src={item.image} className="hover:bg-[blue] bg-[#fef2f2] transition-all duration-200 cursor-pointer" />
              <div className="flex flex-col m-1">
                <p className="font-medium text-xl">{item.name}</p>
                <p>{item.speciality}</p>
                <div className="flex flex-row gap-2 mt-1">
                  <input type="checkbox" checked={item.available} />
                  <p>Available</p>
                </div>
              </div>

            </div>
          )
        }
      </div>

    </div>
  )
}

export default DoctorList