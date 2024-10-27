// import React from 'react'

import { useContext, useEffect } from "react"
import { AdminContext } from "../../context/AdminContext"
import Button from "@mui/material/Button"

const Dashboard = () => {
  const { adminDash, aToken, getAdminDash } = useContext(AdminContext)
  // const [info, setInfo] = useState([])
  useEffect(() => {
    if (aToken) {
      getAdminDash()
      // setInfo.push(adminDash.appointmentsLatest)
      // console.log(info)
    }
  }, [aToken])

  return (
    <div className="w-full p-1">
      <Button variant="contained" color="error" style={{ padding: "14px", letterSpacing: "2px", marginTop: "5px" }} className="text-center bg-[black] py-3  w-full ">Dashboard</Button>
      <div>
        {
          <div className="flex flex-col sm:flex-row gap-2 sm:justify-around m-3 w-[90%] sm:w-[80%]">
            <Button className="py-2" style={{ padding: "15px", paddingLeft: "40px", paddingRight: "40px" }} variant="contained" color=""><span>Doctors : {adminDash.doctors}</span></Button>
            <Button className="py-2" style={{ padding: "15px", paddingLeft: "40px", paddingRight: "40px" }} variant="contained" color=""><span>Appointments : {adminDash.appointments}</span></Button>
            <Button className="py-2" style={{ padding: "15px", paddingLeft: "40px", paddingRight: "40px" }} variant="contained" color=""><span>Patients : {adminDash.patients}</span></Button>
            {/* <p>{adminDash.appointmentsLatest[0]}</p> */}

          </div>
        }
</div>
    
    </div>
  )
}

export default Dashboard