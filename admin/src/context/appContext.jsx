/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext } from "react";

export const AppContext = createContext()


const AppContextProvider = (props) => {
   
    const month = [" ", "Jan", "Fer", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const SlotFormat = (slotDate) => {
      const formattedTime = slotDate.split("-");
      return formattedTime[0] + " " + month[Number(formattedTime[1])] + " " + formattedTime[2]
    }
    const values = {
     SlotFormat
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