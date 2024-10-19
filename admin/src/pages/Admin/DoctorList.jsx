// import React from 'react'

import { useContext, useEffect } from "react"
import { AdminContext } from "../../context/AdminContext"

const DoctorList = () => {

  const {doctors , aToken , getAllDoctors} = useContext(AdminContext)
  useEffect(() => {
    if(aToken){
      getAllDoctors()
      console.log(doctors)
    }
  },[aToken])
  return (

    <div>


    </div>
  )
}

export default DoctorList