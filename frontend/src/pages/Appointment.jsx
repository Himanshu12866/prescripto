/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Appointment = () => {

  const { docId } = useParams()
  const { doctors } = useContext(AppContext)
  console.log(doctors)
  const [docInfo, setDocinfo] = useState(null)
  const fetchInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocinfo(docInfo)
    console.log(docInfo)
  }
  useEffect(() => {
    fetchInfo()
    console.log(docInfo)
  }, [doctors, docId])
  return (
    <div>{
      <div>
        <div>
        <img src={docInfo.image}/>

        </div>

      </div>
    }

    </div>
  )
}

export default Appointment