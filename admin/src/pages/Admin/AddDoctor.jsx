// import React from 'react'

import { useState, useContext } from "react"
import { assets } from "../../assets/assets"
import { AdminContext } from "../../context/AdminContext";


import { toast } from 'react-toastify';
import axios from "axios";

const AddDoctor = () => {

    const [image, setImage] = useState(false);
    const [name, setName] = useState("")
    const [speciality, setSpeciality] = useState("General physician");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [about, setAbout] = useState("");
    const [fees, setfees] = useState("");
    const [experience, setExperience] = useState("1 Year");
    const [degree, setDegree] = useState("");
    const {backendURL,  aToken } = useContext(AdminContext)

    const SubmitForm = async (e) => {
        e.preventDefault()
        console.log(backendURL)

        try {
            if (!image) {
                 toast.error("Please Insert an Image")
            }
            const formData = new FormData()
            formData.append('image', image)
            formData.append('name', name)
            formData.append('speciality', speciality)
            formData.append('password', password)
            formData.append('email', email)
            formData.append('address', JSON.stringify({ line1: address1, line2: address2 }))
            formData.append('about', about)
            formData.append('fees', Number(fees))
            formData.append('experience', experience)
            formData.append('degree', degree)
          

            const { data } = await axios.post(backendURL + '/api/admin/add-doctor', formData, { headers: { aToken } })
            if(data.success) {
                toast.success(data.success)
            }
            else{
                toast.error(data.message)
            }
            console.log(data.message)
        } catch  {

        
            return toast.error("Some Problems")

        }
    }

    return (
        <form onSubmit={SubmitForm} className=" bg-[#b0a8a81c] w-full flex justify-center h-auto">

            <div className="sm:w-[90%] w-full ml-3 mt-2  h-auto overflow-y-auto">
                <p className="font-medium w-full text-start text-xl px-12  py-2 ">Add Doctor</p>
                <div className="flex items-center gap-2 w-[200px]">
                    <label htmlFor="doc_img">
                        <img className="w-[80px] h-[80px] rounded-full cursor-pointer" src={image ? URL.createObjectURL(image) : assets.image_upload} />
                    </label>
                    <input required type="file" name="image" onChange={(e) => setImage(e.target.files[0])} id="doc_img" hidden />
                    {
                        image ? <p>Uploaded</p> : <p className="text-xs">Upload Doctor <br></br> image</p>
                    }
                </div>
                <div className="flex sm:flex-row gap-10 flex-col w-full">
                    <div className=" sm:p-5" >
                        <div >
                            <p>Doctor Name :</p>
                            <input onChange={(e) => setName(e.target.value)} value={name} required className="p-2 my-1 min-w-64 sm:w-80 border rounded-sm" type="text" placeholder="Full Name" />
                        </div>
                        <div>
                            <p>Doctor Email :</p>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} className="p-2 my-1 min-w-64 sm:w-80 border rounded-sm" required type="email" placeholder="Email" />
                        </div>
                        <div>
                            <p>Doctor Password :</p>
                            <input onChange={(e) => setPassword(e.target.value)} value={password} className="p-2 my-1 min-w-64 sm:w-80 border rounded-sm" required type="password" placeholder="Password" />
                        </div>
                        <div>
                            <p>Experience :</p>
                            <select onChange={(e) => setExperience(e.target.value)} value={experience} className="p-2 my-1 min-w-64 sm:w-80 border rounded-sm">
                                <option value="0 Years">0 Years</option>
                                <option value="1 Years">1 Years</option>
                                <option value="2 Years">2 Years</option>
                                <option value="3 Years">3 Years</option>
                                <option value="4 Years">4 Years</option>
                                <option value="5 Years">5 Years</option>
                                <option value="6 Years">6 Years</option>
                                <option value="7 Years">7 Years</option>
                                <option value="8 Years">8 Years</option>
                                <option value="9 Years">9 Years</option>
                                <option value="10 Years">10 Years</option>
                                <option value="10+ Years">10+ Years</option>
                            </select>
                        </div>
                        <div>
                            <p>Fees</p>
                            <input onChange={(e) => setfees(e.target.value)} value={fees} className="p-2 my-1 min-w-64 sm:w-80 border rounded-sm" required type="number" placeholder="Fees" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <div>
                            <p>Speciality :</p>
                            <select onChange={(e) => setSpeciality(e.target.value)} value={speciality} className="p-2 my-1 min-w-64 sm:w-80 border rounded-sm" name="" id="" required>
                                <option value="General physician">General physician</option>
                                <option value="Gynecologist">Gynecologist</option>
                                <option value="Dermatologist">Dermatologist</option>
                                <option value="Pediatricians">Pediatricians</option>
                                <option value="Neurologist">Neurologist</option>
                                <option value="Gastroenterologist">Gastroenterologist</option>
                            </select>
                        </div>
                        <div>
                            <p>Degree :</p>
                            <input onChange={(e) => setDegree(e.target.value)} value={degree.toUpperCase()} className="p-2 my-1 min-w-64 sm:w-80 border rounded-sm" type="text" placeholder="Degree" required />
                        </div>
                        <div>
                            <p>Address :</p>
                            <input onChange={(e) => setAddress1(e.target.value)} value={address1} className="p-2 my-1 min-w-64 sm:w-80 border rounded-sm" type="text" placeholder="Line 1" required />
                            <input onChange={(e) => setAddress2(e.target.value)} value={address2} className="p-2 my-1 min-w-64 sm:w-80 border rounded-sm" type="text" placeholder="Line 1" required />
                        </div>
                    </div>
                </div>
                <div className="sm:w-[70%] w-[80%]  ml-3 mt-2">
                    <p>About</p>
                    <textarea onChange={(e) => setAbout(e.target.value)} value={about} className="w-full p-2" rows="5" placeholder="Some Doctor's Summary" required />
                </div>

                <button type="submit" className="w-52 rounded-full my-10 bg-[blue] p-2 text-white">Click</button>
            </div>


        </form>
    )
}

export default AddDoctor