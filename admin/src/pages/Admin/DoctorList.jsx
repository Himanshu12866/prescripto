// import React from 'react'

import { useContext, useEffect, useState } from "react"
import { AdminContext } from "../../context/AdminContext"

const DoctorList = () => {
  const [doctor , setDoctors] = useState([{}])

  const { doctors, aToken, getAllDoctors } = useContext(AdminContext)
  useEffect(() => {
    if (aToken) {
      getAllDoctors()
      // setDoctors(doctors)
      setDoctors(doctors)
      console.log(doctors)


    }
  }, [aToken])
  return (

    <div>
      <h1>All Doctors</h1>
      <div>
        {
          doctor.map((item, index) => {
            <div key={index}>
              <img src={item.image} />
              <h1>{item.name}</h1>
            </div>
          })
        }
      </div>

    </div>
  )
}

export default DoctorList