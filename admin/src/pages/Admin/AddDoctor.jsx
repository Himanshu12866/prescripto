// import React from 'react'

import { assets } from "../../assets/assets"

// import { assets } from "../../assets"

const AddDoctor = () => {
    return (
        <form className=" bg-[#b0a8a81c] w-full">

            <p className="font-medium w-full text-start text-xl px-12  py-2 ">Add Doctor</p>
            <div className="w-52 ml-3 mt-2">
                <div className="flex items-center gap-2 w-[200px]">
                    <label htmlFor="doc_img">
                        <img className="w-[80px] h-[80px] rounded-full cursor-pointer" src={assets.image_upload} />
                    </label>
                    <input required type="file" id="doc_img" hidden />
                    <p className="text-xs">Upload Doctor <br></br> image</p>
                </div>
                <div>
                    <div>
                        <div>
                            <p>Doctor Name :</p>
                            <input required type="text" placeholder="Full Name" />
                        </div>
                        <div>
                            <p>Doctor Email :</p>
                            <input required type="email" placeholder="Email" />
                        </div>
                        <div>
                            <p>Doctor Password :</p>
                            <input required type="password" placeholder="Password" />
                        </div>
                        <div>
                            <p>Experience :</p>
                            <select>
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
                            <input required type="number" placeholder="Fees" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Speciality :</p>
                            <select name="" id="" required>
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
                            <input type="text" placeholder="Degree" required/>
                        </div>
                        <div>
                            <p>Address :</p>
                            <input type="text" placeholder="Line 1"  required/>
                            <input type="text" placeholder="Line 1" required />
                        </div>
                    </div>
                </div>

            </div>


        </form>
    )
}

export default AddDoctor