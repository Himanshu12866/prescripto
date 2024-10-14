/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appointment = () => {

  const { docId } = useParams()
  const { doctors } = useContext(AppContext)
  const [docInfo, setDocinfo] = useState(null)
  const fetchInfo = async () => {
    const docInf = doctors.find(doc => doc._id === docId)
    setDocinfo(docInf)

  }
  useEffect(() => {
    fetchInfo()

  }, [doctors, docId])

  return (
    <div>{
      <div className='flex flex-col sm:flex-row'>
        <div>
          <img src={docInfo.image} />
        </div>
        <div>
          {/* Doctor Informations */}
          <p>{docInfo.name} <img src={assets.verified_icon} /></p>
        </div>
        <div>
          <p>{docInfo.degree} - {docInfo.speciality}</p>
          <button>{docInfo.experience}</button>
        </div>
        <div>
          <p>About <img src={assets.info_icon} /></p>
          <p>{docInfo.about}</p>
        </div>
      </div>
    }

    </div>
  )
}

export default Appointment