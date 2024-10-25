/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
    const navigate = useNavigate()
    const { speciality } = useParams()
    const { doctors } = useContext(AppContext)
    const [filterDoc, setFilterDoc] = useState([])
    const [search, setSearch] = useState(false)
    const applyFilter = () => {
        if (speciality) {
            setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
        }
        else {
            setFilterDoc(doctors)
        }
    }
    useEffect(() => {
        applyFilter()
    }, [doctors, speciality])
    return (
        <div>
            <p className=' fornt-medium w-full text-xl border-primary text-center border-b-4 py-4 '>Browse Doctors theme the speciality</p>
            <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
                <button className={`${search ? "bg-primary text-white":""} border rounded-lg md:hidden text-black px-2 py-2 transition-all duration-300`} onClick={() => setSearch(prev => !prev)} >Filter Doctors</button>
                <div className={ `${search ? "flex" : "hidden sm:flex"} flex-col gap-4 text-sm text-gray-600`}>
                    <p onClick={() => speciality === "General physician" ? navigate("/doctors") : navigate("/doctors/General physician")} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600  rounded transition-all cursor-pointer ${speciality === "General physician" ? "bg-green-500 border border-gray-500 text-white" : ""}`}>General physician</p>
                    <p onClick={() => speciality === "Gynecologist" ? navigate("/doctors") : navigate("/doctors/Gynecologist")} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-green-500 border-gray-500 text-white" : ""}`}>Gynecologist</p>
                    <p onClick={() => speciality === "Dermatologist" ? navigate("/doctors") : navigate("/doctors/Dermatologist")} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-green-500 border-gray-500 text-white" : ""}`}>Dermatologist</p>
                    <p onClick={() => speciality === "Pediatricians" ? navigate("/doctors") : navigate("/doctors/Pediatricians")} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-green-500 border-gray-500 text-white" : ""}`}>Pediatricians</p>
                    <p onClick={() => speciality === "Neurologist" ? navigate("/doctors") : navigate("/doctors/Neurologist")} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-green-500 border-gray-500 text-white" : ""}`}>Neurologist</p>
                    <p onClick={() => speciality === "Gastroenterologist" ? navigate("/doctors") : navigate("/doctors/Gastroenterologist")} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-green-500 border-gray-500 text-white" : ""}`}>Gastroenterologist</p>
                    <p onClick={() => speciality === "Eye Surgen" ? navigate("/doctors") : navigate("/doctors/Eye Surgen")} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer ${speciality === "Eye Surgen" ? "bg-green-500 border-gray-500 text-white" : ""}`}>Eye Surgen</p>
                    <p onClick={() => speciality === "Eye Surgen" ? navigate("/doctors") : navigate("/doctors/Dental")} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded transition-all cursor-pointer ${speciality === "Dental" ? "bg-green-500 border-gray-500 text-white" : ""}`}>Dental</p>
                </div>

                <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
                    {
                        filterDoc.map((item, index) => <div onClick={() => navigate(`/appointment/${item._id}`)} className='border border-blue-500 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>


                            <img className='bg-blue-50 h-[200px] w-full' src={item.image} alt='' />
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