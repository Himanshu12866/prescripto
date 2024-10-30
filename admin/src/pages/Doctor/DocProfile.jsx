import { useContext, useEffect, useState } from "react"
import { DoctorContext } from "../../context/doctorContext"
import { Button, TextField, FormGroup, FormControlLabel, Checkbox, FormControl, Select, MenuItem, InputLabel } from "@mui/material"


const DocProfile = () => {
    const { docToken, profile, getProfile } = useContext(DoctorContext)
    const [edit, setEdit] = useState(false)
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
        console.log(age)
    };
    useEffect(() => {
        getProfile()
        console.log(profile)

    }, [docToken])
    return (
        <div className="w-full p-1">
            <Button className="w-full" variant="contained" color="success">Your Profile</Button>

            <div className="flex justify-start mx-10 mt-3">
                <div>
                    {/* <img src={profile.image} /> */}
                </div>
                <div>
                    <div className="flex flex-col justify-between  ">
                        <div className="flex flex-row justify-between py-2 w-full">
                            <p className="w-64 border-b-2">Name :</p>

                            {
                                edit ? <TextField id="outlined-basic" label="Enter Name" className="w-72" variant="outlined" margin="none" /> : <p className="p-1 w-64 border-b-2" type="text">{profile.name}</p>
                            }
                        </div>
                        <div className="flex flex-row justify-between py-2 w-full">
                            <h1 className="w-52 border-b-2">Email :</h1>

                            {
                                edit ? <TextField id="outlined-basic" value={profile.email} className="w-72" variant="outlined" margin="none" /> : <p className="p-1 w-64 border-b-2" type="text">{profile.email}</p>
                            }
                        </div>
                        <div className="flex flex-row  justify-between py-2 w-full">
                            <h1 className="w-52 border-b-2">Fees :</h1>

                            {
                                edit ? <TextField id="outlined-basic" label="Enter Fees" className="w-72" variant="outlined" margin="none" /> : <p className="p-1 w-64 border-b-2" type="text">{profile.fees}</p>
                            }
                        </div>
                        <div className="flex flex-row justify-between py-2 w-full">
                            <h1 className="w-52 border-b-2">Available :</h1>

                            {
                                edit ? <FormGroup className="w-72">
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Available" />
                                </FormGroup> : <p className="p-1 w-64 border-b-2" type="text">{profile.name}</p>
                            }
                        </div>
                        <div className="flex flex-row justify-between py-2 w-full">
                            <h1 className="w-52 border-b-2">Experience :</h1>

                            {
                                edit ? <FormControl className="w-72 px-2" variant="outlined">
                                    <InputLabel id="demo-simple-select-standard-label">Experience</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={age}
                                        onChange={handleChange}
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
                        <div className="flex flex-row justify-between py-2 w-full">
                            <h1 className="w-52 border-b-2">Degree :</h1>

                            {
                                edit ? <TextField id="outlined-basic" label="Enter Degree" className="w-72" variant="outlined" margin="none" /> : <p className="p-1 w-64 border-b-2" type="text">{profile.degree}</p>
                            }
                        </div>
                        <div className="flex flex-row justify-between py-2 w-full">
                            <h1 className="w-52 border-b-2">Address :</h1>


                            {
                                edit ? <div className="flex flex-col gap-1">
                                    <TextField id="outlined-basic" label="Enter Degree" className="w-72" variant="outlined" margin="none" />
                                    <TextField id="outlined-basic" label="Enter Degree" className="w-72" variant="outlined" margin="none" />
                                </div> : <div className="w-64">
                                    {/* <p className=" text-left">{profile.address.line1}</p>
                                    <p className=" text-left">{profile.address.line2}</p> */}
                                </div>

                            }

                        </div>
                        <div className="flex flex-row py-2 justify-between w-full">
                            <h1 className="w-64 border-b-2">About :</h1>

                            {edit ? <TextField className="p-1  w-[600px] mx-5 border-b-2" label="About" /> : <p className="p-1  w-[600px] border-b-2" type="text">{profile.about}</p>}
                        </div>


                    </div>
                </div>
            </div>
            <div>
                {edit ? <div className="flex justify-center gap-2 w-[50%] p-3"> 
                    <Button style={{padding:"10px"}} variant="contained" color="success" className="w-52">Save</Button>
                    <Button style={{padding:"10px"}} className="w-52 " color="error" variant="contained" onClick={() => {
                        setEdit(false);
                    }}>Cancel</Button>
                </div> : <Button  className="w-80" style={{padding:"10px"}} variant="contained" onClick={() => { setEdit(true); scrollTo(0,500) }}>Edit Details</Button>}
            </div>
        </div>

    )
}

export default DocProfile