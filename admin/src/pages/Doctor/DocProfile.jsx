import { useContext, useEffect, useState } from "react"
import { DoctorContext } from "../../context/doctorContext"
import { Button } from "@mui/material"


const DocProfile = () => {
    const { docToken, profile,  setProfile, getProfile } = useContext(DoctorContext)
    const [edit, setEdit] = useState(false)
    useEffect(() => {
        getProfile()
        console.log(profile)
    }, [docToken])
    return (
        <div className="w-full p-1">
            <Button className="w-full" variant="contained" color="success">Your Profile</Button>
            {
                edit ? (<input onChange={(e) =>setProfile(prev => ({...prev  , name  : e.target.value}))} type="text" value={profile.name} />) : <h1>{profile.name}</h1>
            }
            <button onClick={() => { setEdit(true) }}>Edit</button>
        </div>

    )
}

export default DocProfile