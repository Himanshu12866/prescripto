/* eslint-disable react/prop-types */
import { createContext } from "react";

export const AppContext = createContext()


const AppContextProvider = (props) => {
    const values = {
     
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