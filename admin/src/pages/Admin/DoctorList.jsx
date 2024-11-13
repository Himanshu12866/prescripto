/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react'

import { useContext, useEffect } from "react"
import { AdminContext } from "../../context/AdminContext"
import { AppContext } from "../../context/appContext"

import { Button } from "@mui/material"
const DoctorList = () => {

  const { doctors, aToken, getAllDoctors , changeAvailability} = useContext(AdminContext)
  const {theme} = useContext(AppContext)

  useEffect(() => {

    if (aToken) {
      getAllDoctors()
      // console.log(doctors)
    }

  }, [aToken])

  return (

    <div className={` ${theme === '#0f1214' ? 'bg-[#0f1214] text-white':'bg-[#f8f4f4]'} rounded-lg w-full p-2`}>
      {/* <h1 className="font-medium text-xl px-16 sm:px-10 sm:my-5">All Doctors List</h1> */}
      <Button
        variant="contained"
        color="error"
        style={{ padding: "14px", letterSpacing: "2px", marginTop: "5px" }}
        className="text-center bg-[black] py-3  w-full"
      >
        Doctor&apos;s List
      </Button>

      <div className="flex flex-row flex-wrap p-2">
        {
          doctors.map((item, index) =>
            <div className=" w-full sm:w-52 border m-2 h-auto rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200 shadow-gray-900" key={index}>
              <img src={item.image} className={` ${theme === '#0f1214' ? 'bg-[#6161de]' : 'bg-[#D1C4E9]'} h-[200px] w-full cursor-pointer`} />
              <div className={ `flex flex-col p-1 ${theme === '#0f1214' ? 'bg-[#950100] text-[#FFF]' : 'bg-[#fff]'}`}>
                <p className="font-medium text-xl">{item.name}</p>
                <p>{item.speciality}</p>
                <div className="flex flex-row gap-2 mt-1">
                  <input id={item._id} onChange={() => changeAvailability(item._id)} type="checkbox" checked={item.available} />
                  <p className={ `flex flex-col p-1 ${theme === '#0f1214' ? ' text-[#0ef] ' : 'bg-[#fff]'}`} >Available</p>
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