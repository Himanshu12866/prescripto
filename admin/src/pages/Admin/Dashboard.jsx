// import React from 'react'

import { useContext, useEffect } from "react"
import { AdminContext } from "../../context/AdminContext"
import Button from "@mui/material/Button"

const Dashboard = () => {
  const { adminDash, aToken, getAdminDash } = useContext(AdminContext)
  useEffect(() => {
    if (aToken) {
      getAdminDash()
      // console.log(adminDash)
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

          </div>
        }

      </div>
      <div>
        {adminDash.appointmentLatest.map((item, index) => (
          <div key={index}>
            <div className="border py-2 px-2 mt-3 sm:grid grid-cols-[0.5fr_3fr_1fr_4fr_3fr_1fr_2fr] grid-flow-col">
              <p>{index + 1}</p>
              <p className="text-center font-medium">{item.userData?.name}</p>
              <p className="text-[15px]">{item.userData?.email}</p>
              <p className="text-center">
                <span>{(item.slotDate) || "Na"}</span> &nbsp; <span>{item.slotTime || "Na"}</span>
              </p>
              <div className="flex flex-row gap-4" >
                <img style={{ width: "40px", height: "35px", borderRadius: "50%" }} src={item.docData?.image} />
                <p className="text-center font-semibold">{item.docData?.name}</p>
              </div>
              <p className="font-medium">&#8377; {item.docData?.fees}</p>
              <p>
                {item.cancelled ? <Button variant="outlined" color="error" disableElevation>
                  Cancelled
                </Button> : <Button variant="outlined" color="error" disableElevation>
                  Cancel
                </Button>}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard