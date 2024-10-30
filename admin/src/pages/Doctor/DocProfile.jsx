import { useContext, useEffect, useState } from "react"
import { DoctorContext } from "../../context/doctorContext"
import { Button, TextField, FormGroup, FormControlLabel, Checkbox, FormControl, Select, MenuItem, InputLabel } from "@mui/material"
import axios from "axios"
import { toast } from "react-toastify"


const DocProfile = () => {
    const { docToken, profile, setProfile, getProfile, backendURL } = useContext(DoctorContext)
    const [edit, setEdit] = useState(false)

    const updataDocProfile = async () => {

        try {
            const updatedprofileData = {
                name: profile.name,
                fees: profile.fees,
                experience: profile.experience,
                about: profile.about,
                degree: profile.degree,
                available: profile.available,
                address: profile.address
            };
            const { data } = await axios.post(backendURL + '/api/doctor/updateprofile', updatedprofileData, { headers: { docToken } })
            if (data.success) {
                setEdit(false)
                toast.success(data.message)
                getProfile()
            }
            else {
                toast.error("Failed to Update Profile")
            }
        } catch (error) {

            console.log(error)
        }
    }


    useEffect(() => {
        getProfile()
        console.log(profile)


    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [docToken])
    return (
        <div className="w-72 sm:w-full p-1 overflow-x-hidden">
            <Button className="w-full" variant="contained" color="success">Your Profile</Button>

            <div className="flex justify-start mx-10 mt-3">
                <div>
                    {/* <img src={profile.image} /> */}
                </div>
                <div>
                    <div className="flex flex-col justify-between  ">
                        <div className="flex sm:flex-row w-66  flex-col gap-5 justify-between py-2">
                            <p className="w-64 border-b-2 font-medium">Name :</p>

                            {
                                edit ? <TextField id="outlined-basic" label="Enter Name" className="w-60 sm:w-72" value={profile.name} onChange={(e) => { setProfile(prev => ({ ...prev, name: e.target.value })) }} variant="outlined" margin="none" /> : <p className="p-1 w-64 border-b-2" type="text">{profile.name}</p>
                            }
                        </div>
                        <div className="flex sm:flex-row w-66  flex-col gap-5 justify-between py-2">
                            <h1 className="w-52 border-b-2 font-medium">Email :</h1>

                            {
                                edit ? <TextField id="outlined-basic" label="Email" onKeyDown={() => { alert("Sorry Email Cannot be change") }} value={profile.email} className="w-60 sm:w-72" variant="outlined" margin="none" /> : <p className="p-1 w-64 border-b-2" type="text">{profile.email}</p>
                            }
                        </div>
                        <div className="flex sm:flex-row w-66  flex-col gap-5 justify-between py-2">
                            <h1 className="w-52 border-b-2 font-medium">Fees :</h1>

                            {
                                edit ? <TextField id="outlined-basic" label="Enter Fees" value={profile.fees} onChange={(e) => { setProfile(prev => ({ ...prev, fees: e.target.value })) }} className="w-60 sm:w-72" variant="outlined" margin="none" /> : <p className="p-1 w-64 border-b-2" type="text">{profile.fees}</p>
                            }
                        </div>
                        <div  className="flex sm:flex-row w-66  flex-col gap-5 justify-between py-2">
                            <h1 className="w-52 border-b-2 font-medium">Available :</h1>

                            {
                                edit ? <FormGroup className="w-72">
                                    <FormControlLabel control={<Checkbox checked={profile.available ? true : false} onChange={() => { setProfile(prev => ({ ...prev, available: !prev.available })) }} />} label="Available" />
                                </FormGroup> : <FormGroup className="w-72">
                                    <FormControlLabel className="px-8" control={<Checkbox checked={profile.available ? true : false} />} label="Available" />
                                </FormGroup>
                            }
                        </div>
                        <div  className="flex sm:flex-row w-66  flex-col gap-5 justify-between py-2">
                            <h1 className="w-52 border-b-2 font-medium">Experience :</h1>

                            {
                                edit ? <FormControl className="w-72 px-2" variant="outlined">
                                    <InputLabel id="demo-simple-select-standard-label">Experience</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        className="w-60 sm:w-72"
                                        value={profile.experience}
                                        onChange={(e) => { setProfile(prev => ({ ...prev, experience: e.target.value })) }}
                                        label="Experience"
                                    >
                                        {/* <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem> */}
                                        <MenuItem value="1 Year">1 Year</MenuItem>
                                        <MenuItem value="2 Year">2 Year</MenuItem>
                                        <MenuItem value="3 Year">3 Year</MenuItem>
                                        <MenuItem value="4 Year">4 Year</MenuItem>
                                        <MenuItem value="5 Year">5 Year</MenuItem>
                                        <MenuItem value="6 Year">6 Year</MenuItem>
                                        <MenuItem value="7 Year">7 Year</MenuItem>
                                        <MenuItem value="8 Year">8 Year</MenuItem>
                                        <MenuItem value="9 Year">9 Year</MenuItem>
                                        <MenuItem value="10+ Year">10+ Year</MenuItem>

                                    </Select>
                                </FormControl> : <p className="w-64">{profile.experience}</p>
                            }
                        </div>
                        <div  className="flex sm:flex-row w-66  flex-col gap-5 justify-between py-2">
                            <h1 className="w-52 border-b-2 font-medium">Degree :</h1>

                            {
                                edit ? <TextField id="outlined-basic" label="Enter Degree" value={profile.degree} className="w-60 sm:w-72" onChange={(e) => { setProfile(prev => ({ ...prev, degree: e.target.value })) }}  variant="outlined" margin="none" /> : <p className="p-1 w-64 border-b-2" type="text">{profile.degree}</p>
                            }
                        </div>
                        <div  className="flex sm:flex-row w-66  flex-col gap-5 justify-between py-2">
                            <h1 className="w-52 border-b-2 font-medium">Address :</h1>


                            {
                                edit ? <div className="flex flex-col gap-2">
                                    <TextField id="outlined-basic" label="Line 1" value={profile.address.line1} onChange={(e) => { setProfile(prev => ({ ...prev, address: { ...prev, line1: e.target.value } })) }} className="w-60 sm:w-72"  variant="outlined" margin="none" />
                                    <TextField id="outlined-basic" label="Line 2" value={profile.address.line2} onChange={(e) => { setProfile(prev => ({ ...prev, address: { ...prev, line2: e.target.value } })) }} className="w-60 sm:w-72" variant="outlined" margin="none" />
                                </div> : <div className="w-64">
                                    {/* <p className=" text-left">{profile.address.line1}</p>
                                    <p className=" text-left">{profile.address.line2}</p> */}
                                </div>


                            }

                        </div>
                        <div  className="flex sm:flex-row w-66  flex-col gap-5 justify-between py-2">
                            <h1 className="w-64 border-b-2 font-medium">About :</h1>

                            {edit ? <TextField className="p-1 w-60 sm:w-[600px] sm:mx-5 border-b-2" label="About" multiline rows="4" value={profile.about} onChange={(e) => { setProfile(prev => ({ ...prev, about: e.target.value })) }} /> : <p className="p-1 w-52 sm:w-[600px] border-b-2" type="text">{profile.about}</p>}
                        </div>



                    </div>
                </div>
            </div>
            <div className="my-2 mb-6">
                {edit ? <div className="flex justify-center gap-2 w-full sm:w-[50%] p-3">
                    <Button style={{ padding: "10px" }} variant="contained" color="success" onClick={updataDocProfile} className="w-64 sm:w-52">Save</Button>
                    <Button style={{ padding: "10px" }} className="w-64 sm:w-52 " color="error" variant="contained" onClick={() => {
                        setEdit(false);
                    }}>Cancel</Button>
                </div> : <Button className="sm:w-80 w-72" style={{ padding: "10px" }} variant="contained" onClick={() => { setEdit(true); scrollTo(0, 500) }}>Edit Details</Button>}
            </div>
        </div>

    )
}

export default DocProfile