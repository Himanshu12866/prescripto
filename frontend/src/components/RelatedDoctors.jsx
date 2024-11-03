/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({ speciality, docId }) => {
    const { doctors , theme , textTheme } = useContext(AppContext)
    let navigate = useNavigate()
    const [relDoc, setRelDoc] = useState([])
    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const filteredDocs = doctors.filter(doc => doc.speciality === speciality && doc._id !== docId)
            setRelDoc(filteredDocs)
        }
    }, [doctors, docId, speciality])

    return (
        <div className='flex flex-col items-center my-16 gap-4 text-black md:mx:10'>
            <h1 style={{color:`${(theme === '#0f1214') ? '#0ef' : 'black'}`}} className='text-3xl font-medium'>Related Doctors</h1>
            <p style={{color:`${(theme === '#0f1214') ? 'white' : 'black'}`}}  className='sm:w-1/3 text-md text-center'>Browse Related Doctors</p>
            <div className='w-full grid grid-cols-auto gap-4 pt5 gap-y-6 px-3 sm:px-0'>
                {
                    relDoc.slice(0, 5).map((item, index) => <div onClick={() =>{ navigate(`/appointment/${item._id}`) ; scrollTo(0,0,0)} } style={{ backgroundColor: `${(theme === '#0f1214') ? '#950101' : '#D1C4E9'}`, color: `${(theme === '#0f1214') ? 'white' : 'black'}` }}  className=' w-fullborder border-blue-500 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>


                        <img className='bg-blue-50' src={item.image} style={{height:"200px" , width:"100%"}} alt='' />
                        <div className='p-4'>
                            <div className=' flex gap-2 text-sm text-center text-green-400 items-center'>
                                <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Availabel</p>
                            </div>
                            <p style={{ backgroundColor: `${(theme === '#0f1214') ? '#950101' : '#D1C4E9'}`, color: `${(theme === '#0f1214') ? 'white' : 'black'}` }} className='text-grey text-xl font-medium' >{item.name}</p>
                            <p className='text-grey text-sm ' >{item.speciality}</p>
                        </div>

                    </div>
                    )
                }
            </div>
            <button onClick={() => { navigate("/doctors"); scrollTo(0, 0) }} style={{ backgroundColor: `${(theme === '#0f1214') ? '#86003c' : '#00796B'}`, color: `${(theme === '#0f1214') ? 'white' : 'black'}` }} className='bg-blue-300 text-grey-500 px-16 py-2 rounded-full mt-10'>More</button>
        </div>
    )
}

export default RelatedDoctors