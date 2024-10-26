// import React from 'react'

import { useContext, useEffect } from "react"
import { AdminContext } from "../../context/AdminContext"

const Dashboard = () => {
  const { adminDash, aToken, getAdminDash } = useContext(AdminContext)
  useEffect(() => {
    if (aToken) {
      getAdminDash()
      console.log(adminDash)
    }
  }, [aToken])

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        {/* {
          adminDash.map((dash, index) => {
            return (
              <div key={index}>
                <h1>{dash.doctors}</h1>
              </div>
            )
          })
        } */}

      </div>
    </div>
  )
}

export default Dashboard