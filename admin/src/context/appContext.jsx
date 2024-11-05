/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext()


const AppContextProvider = (props) => {
    const [theme, setTheme] = useState(false)
    const [textTheme, setTextTheme] = useState('black')
    const [isDarkMode, setDarkMode] = useState(false);
    const month = [" ", "Jan", "Fer", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const SlotFormat = (slotDate) => {
        const formattedTime = slotDate.split("-");
        return formattedTime[0] + " " + month[Number(formattedTime[1])] + " " + formattedTime[2]
    }

    const toggleDarkMode = (checked) => {
        setDarkMode(checked);
        if (theme === '#0f1214') {
            setTheme('white')
            setTextTheme('black')
        }
        else {
            setTheme('#0f1214')
            setTextTheme('white')
        }
    };
    const values = {
        SlotFormat, theme, textTheme, isDarkMode , toggleDarkMode
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