// import React from 'react'

import { assets } from "../../assets/assets"

// import { assets } from "../../assets"

const AddDoctor = () => {
    return (
        <form className=" bg-[#b0a8a81c] w-full flex justify-center">

            <div className="sm:w-[90%] w-full ml-3 mt-2 overflow-y-scroll h-[80vh]">
            <p className="font-medium w-full text-start text-xl px-12  py-2 ">Add Doctor</p>
                <div className="flex items-center gap-2 w-[200px]">
                    <label htmlFor="doc_img">
                        <img className="w-[80px] h-[80px] rounded-full cursor-pointer" src={assets.image_upload} />
                    </label>
                    <input required type="file" id="doc_img" hidden />
                    <p className="text-xs">Upload Doctor <br></br> image</p>
                </div>
                <div className="flex sm:flex-row gap-10 flex-col w-full">
                    <div className=" sm:p-5" >
                        <div >
                            <p>Doctor Name :</p>
                            <input required className="p-2 my-1 min-w-64 sm:w-80 border rounded-sm" type="text" placeholder="Full Name" />
                        </div>
                        <div>
                            <p>Doctor Email :</p>
                            <input className="p-2 my-1 min-w-64 sm:w-80 border rounded-sm" required type="email" placeholder="Email" />
                        </div>
                        <div>
                            <p>Doctor Password :</p>
                            <input className="p-2 my-1 min-w-64 sm:w-80 border rounded-sm" required type="password" placeholder="Password" />
                        </div>
                        <div>
                            <p>Experience :</p>
                            <select className="p-2 my-1 min-w-64 sm:w-80 border rounded-sm">
                                <option value="0 Years">0 Years</option>
                                <option value="1 Years">1 Years</option>
                                <option value="2 Years">2 Years</option>
                                <option value="3 Years" selected>3 Years</option>
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
                            <input className="p-2 my-1 min-w-64 sm:w-80 border rounded-sm" required type="number" placeholder="Fees" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <div>
                            <p>Speciality :</p>
                            <select className="p-2 my-1 min-w-64 sm:w-80 border rounded-sm" name="" id="" required>
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
                            <input className="p-2 my-1 min-w-64 sm:w-80 border rounded-sm" type="text" placeholder="Degree" required/>
                        </div>
                        <div>
                            <p>Address :</p>
                            <input className="p-2 my-1 min-w-64 sm:w-80 border rounded-sm" type="text" placeholder="Line 1"  required/>
                            <input className="p-2 my-1 min-w-64 sm:w-80 border rounded-sm" type="text" placeholder="Line 1" required />
                        </div>
                    </div>
                </div>
                <div className="sm:w-[80%] w-full ml-3 mt-2">
                    <p>About</p>
                    <textarea className="w-full"  placeholder="Some Doctor's Summary" required/>
                </div>

            </div>


        </form>
    )
}

export default AddDoctor