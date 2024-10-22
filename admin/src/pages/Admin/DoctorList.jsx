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

    <div>
      <h1>All Doctors List</h1>

      <div>

        {
          <div>
            <h1>{doctors[0].name}</h1>
            <h1>{doctors[1].name}</h1>
          </div>
        }
      </div>

    </div>
  )
}

export default DoctorList