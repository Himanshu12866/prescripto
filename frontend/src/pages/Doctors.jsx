/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
    const navigate = useNavigate()
    const { speciality } = useParams()
    const { doctors } = useContext(AppContext)
    const [filterDoc, setFilterDoc] = useState([])
    const applyFilter = () => {
        if(speciality){
            setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
        }
        else{
            setFilterDoc(doctors)
        }
    }
    useEffect(() => {
applyFilter()
    } ,[doctors , speciality])
    return (
        <div>
            <p className='text-gray-600'>Browse Doctors theme the speciality</p>
            <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
                <div className='flex flex-col gap-4 text-sm text-gray-600'>
                    <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer`}>1nasdjan</p>
                    <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer`}>kjbfakjsb</p>
                    <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer`}>kjbfakjsb</p>
                    <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer`}>kjbfakjsb</p>
                    <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer`}>kjbfakjsb</p>
                    <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer`}>kjbfakjsb</p>
                </div>
            
            <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
                {
                    filterDoc.map((item, index) => <div onClick={() => navigate(`/appointment/${item._id}`)} className='border border-blue-500 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>


                        <img className='bg-blue-50' src={item.image} alt='' />
                        <div className='p-4'>
                            <div className=' flex gap-2 text-sm text-center text-green-400 items-center'>
                                <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Availabel</p>
                            </div>
                            <p className='text-grey text-xl font-medium' >{item.name}</p>
                            <p className='text-grey text-sm ' >{item.speciality}</p>
                        </div>

                    </div>
                    )
                }
            </div>
        </div></div>
    )
}

export default Doctors