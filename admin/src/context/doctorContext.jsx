/* eslint-disable react/prop-types */

import { createContext, useState } from "react";


export const DoctorContext = createContext()
const DoctorContextProvider = (props) => {
    const backendURL = import.meta.env.VITE_BACKEND_URL
    const [docToken, setDocToken] = useState(localStorage.getItem('DoctorToken') ? localStorage.getItem("DoctorToken") : "")
    const value = {
        docToken, setDocToken,
        backendURL
    }
    return (
        <DoctorContext.Provider value={value}>
            {
                props.children
            }
        </DoctorContext.Provider>
    )
}
export default DoctorContextProvider