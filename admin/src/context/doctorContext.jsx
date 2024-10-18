/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars*/
import { createContext } from "react";


export const DoctorContext = createContext()
const DoctorContextProvider = (props) => {
    const value = {

    }
    return (
        <DoctorContext.Provider value={value}>
            {
                props.childern
            }
        </DoctorContext.Provider>
    )
}
export default DoctorContextProvider