/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../components/RelatedDoctors'
import { toast } from 'react-toastify'
import axios from 'axios'

const Appointment = () => {

  const { docId } = useParams()
  let navigate = useNavigate()
  const { doctors, token, backendURL, getDrData, theme, textTheme } = useContext(AppContext)
  const daysOfWeak = ['SUN', "MON", "TUE", "WED", "THU", "FRI", "SAT"]
  const [docInfo, setDocinfo] = useState(null)
  const [slotIndex, setSlotIndex] = useState(0)
  const [docSlot, setDocSlot] = useState([])
  const [slotTime, setSlotTime] = useState("")

  const fetchInfo = async () => {
    const docInf = doctors.find(doc => doc._id === docId)
    setDocinfo(docInf)

  }
  // const bookAppointment = async () => {
  //   if (!token) {
  //     toast.warn("Login to Book appointment 🤬")
  //     navigate('/login')
  //   }
  //   try {
  //     const date = docSlot[slotIndex][0].dateTime;
  //     let day = date.getDate()
  //     let month = date.getMonth() + 1;
  //     let year = date.getFullYear()
  //     const slotDate = day + ' -' + month + " _" + year
  //     console.log(slotDate)
  //     const { data } = await axios.post(backendURL + '/api/user/book-appointment' + { docId, slotDate, slotTime }, { headers: { token } })
  //     if (data.success) {
  //       toast.success("Appointment booked successfully")
  //       getDrData()
  //       navigate("/my-appointment")
  //     }
  //     else {
  //       toast.error("Failed to book appointment")
  //     }
  //   }
  //   catch (error) {
  //     toast.error("Some thing went wrong")

  //   }
  // }
  const bookAppointment = async () => {
    if (!token) {
      toast.warn("Login to book an appointment 🤬");
      navigate("/login");
      return;
    }

    try {
      // Get the date of the selected slot
      const selectedSlot = docSlot[slotIndex][0].dateTime;
      const day = selectedSlot.getDate();
      const month = selectedSlot.getMonth() + 1;
      const year = selectedSlot.getFullYear();
      const slotDate = `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;

      // Log to check the date and slot time
      console.log({ slotDate, slotTime });

      // Ensure slotTime is selected before booking
      if (!slotTime) {
        toast.warn("Please select a time slot before booking!");
        return;
      }

      // API request to book an appointment
      const { data } = await axios.post(
        backendURL + '/api/user/book-appointment',
        { docId, slotDate, slotTime },
        { headers: { token } }
      );


      if (data.success) {
        toast.success("Appointment booked successfully!");
        getDrData(); // Update doctor data if needed
        navigate("/my-appointment"); // Redirect to appointments page
      } else {
        toast.error("Failed to book appointment");
      }
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("Slot Already Booked Please Select Another Slot");
    }
  };


  const getTime = async () => {

    setDocSlot([])

    let today = new Date()

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today)
      currentDate.setDate(currentDate.getDate() + i)

      let endDate = new Date(today)
      endDate.setDate(endDate.getDate() + i)
      endDate.setHours(21, 0, 0, 0)

      if (today.getDate() === currentDate.getDate()) {
        if (currentDate.getHours() >= 10) {
          currentDate.setHours(currentDate.getHours() + 1)
        }
        else {
          currentDate.setHours(10)
        }
        currentDate.setMinutes(currentDate.getMinutes() >= 30 ? 30 : 0)
      }
      else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)

      }

      let timeSlots = []
      while (currentDate < endDate) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

        timeSlots.push({
          time: formattedTime,
          dateTime: new Date(currentDate)
        })
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }
      setDocSlot(prev => ([...prev, timeSlots]))
    }
  }


  useEffect(() => {
    fetchInfo()
  }, [doctors, docId])

  useEffect(() => {
    getTime()
  }, [])


  if (!docInfo) {
    return <div>Loading...</div>  // You can replace this with a loading spinner or message
  }
  return (
    <div>{
      <div className='flex flex-col sm:flex-row gap-28 sm:gap-4'>
        <div>
          <img style={{ backgroundColor: `${(theme === '#0f1214') ? '#950100' : '#D1C4E9'}` }} className=' w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt='docimg' />
        </div>
        <div style={{ backgroundColor: `${(theme === '#0f1214') ? '#212121' : 'white'}` }} className='flex-1 border border-gray-400 rounded-lg p-8 mx-2 sm:mx-0 py-4  mt-[-80px] sm:mt-0'>
          {/* Doctor Informations */}
          <p style={{ color: `${(theme === '#0f1214') ? 'white' : 'black'}` }} className='flex items-center  font-medium text-gray-900 text-2xl gap-2'>{docInfo.name} <img className="w-5" src={assets.verified_icon} /></p>

          <div className='flex items-center  font-medium text-gray-900 text-md gap-2'>
            <p style={{ color: `${(theme === '#0f1214') ? 'white' : 'black'}` }} >{docInfo.degree} - {docInfo.speciality}</p>
            <button style={{ color: `${(theme === '#0f1214') ? 'white' : 'black'}`, backgroundColor: `${theme === '#0f1214' ? 'blue' : 'white'}` }} className='text-xs border py-0.5 px-2 border-gray-500 rounded-full'>{docInfo.experience}</button>
          </div>
          <div>
            <p style={{ color: `${(theme === '#0f1214') ? 'white' : 'black'}` }} className='flex items-center py-3 font-medium text-gray-900 text-lg gap-2'>About <img src={assets.info_icon} /></p>
            <p style={{ color: `${(theme === '#0f1214') ? 'white' : 'black'}` }} className='text-xl'>{docInfo.about}</p>
          </div>
          <p style={{ color: `${(theme === '#0f1214') ? 'white' : 'black'}` }} className=' py-1 text-gray-00'>Appointment Fee : <span style={{ color: `${(theme === '#0f1214') ? 'white' : 'black'}` }} className='font-medium text-lg text-blue-100'>${docInfo.fees}</span></p>
        </div>
      </div>
    }
      <div className='sm:ml-72 sm:pl-4 mt-1 text-gray-500'>
        <p style={{ color: `${(theme === '#0f1214') ? 'white' : 'black'}` }} className='font-medium text-2xl py-3'>Booking Slots</p>
        <div className='flex items-center  w-full mt-1 gap-14 overflow-x-auto'>
          {
            docSlot.length && docSlot.map((item, index) => (
              <div style={{ color: `${(theme === '#0f1214') ? 'white' : 'black'}`, border: "1px solid red" }} onClick={() => (setSlotIndex(index))} className={`text-center py-5 min-w-16 rounded-full cursor-pointer  ${(slotIndex === index) ? 'bg-primary text-white' : 'border border-gray-200'}`} key={index}>
                <p>{item[0] && daysOfWeak[item[0].dateTime.getDay()]}</p>
                <p >{item[0] && item[0].dateTime.getDate()}</p>
              </div>

            ))
          }
        </div>
        <div className='flex items-center  gap-3 w-full mt-3 overflow-x-scroll pb-4'>
          {
            docSlot.length && docSlot[slotIndex].map((item, index) => (
              <p style={{ color: `${(theme === '#0f1214') ? 'white' : 'black'}`, border: "1px solid red" }} onClick={() => setSlotTime(item.time)} className={`text-sm  flex-shrink-0 py-2 px-5 border mr-2 border-zinc-600 font-medium rounded-full cursor-pointer ${item.time === slotTime ? "bg-[#616161] text-[red]" : "text-black"}`} key={index}>{item.time}</p>
            ))
          }
        </div>
        <button style={{ backgroundColor: `${(theme === '#0f1214') ? '#950101' : '#D14'}`, color: `${(theme === '#0f1214') ? 'white' : 'white'}` }} onClick={bookAppointment} className=" w-full rounded-full font-medium my-2 mt-4  py-3">Book An Appointment</button>
      </div>

      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  )
}

export default Appointment