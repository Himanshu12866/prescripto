/* eslint-disable react/prop-types */
import { createContext } from "react";
import { doctors } from "../assets/assets";
export const AppContext = createContext()


const AppContextProvider = (props) => {
    const values = {
        doctors
    }
    return (
        <AppContext.Provider value={values}>
            {
                props.children
            }
        </AppContext.Provider>
    )
}

export default AppContextProvider