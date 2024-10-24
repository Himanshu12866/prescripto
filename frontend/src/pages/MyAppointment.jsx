/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointment = () => {

  const {backendURL , token} = useContext(AppContext)
  const [ appData , setAppData] = useState([])
  
  return (
    <div>
      <h1>booked</h1>
    </div>
  )
}

export default MyAppointment