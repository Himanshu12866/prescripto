/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const backendURL = import.meta.env.VITE_BACKEND_URL;
    const [doctors, setDoctors] = useState([]);
    const [isDarkMode, setDarkMode] = useState(false);
    const [theme, setTheme] = useState('white')
    const [textTheme, setTextTheme] = useState('black')


    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false);
    const [userData, setUserData] = useState(false)

    const getDrData = async () => {
        try {
            const { data } = await axios.get(backendURL + "/api/doctor/list", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (data) {
                setDoctors(data.doctors);
                toast.success("User data loaded successfully");
            }
        } catch (error) {
            console.error(error.response ? error.response.data : error.message);
            toast.error(error.response ? error.response.data.message : error.message);
        }
    };
    const userProfile = async () => {
        try {

            const { data } = await axios.get(backendURL + "/api/user/get-profile", { headers: { token } })
            if (data.success) {
                setUserData(data.userData)
            }
            else {
                toast.error(data.error)
            }
        } catch (error) {
            console.error(error.response ? error.response.data : error.message);
            toast.error(error.response ? error.response.data.message : error.message);
        }
    }
    const toggleDarkMode = (checked) => {
        setDarkMode(checked);
        if (theme === 'black') {
            setTheme('white')
            setTextTheme('black')
        }
        else {
            setTheme('#0f1214')
            setTextTheme('white')
        }
    };

    const values = {
        doctors,
        getDrData,
        token,
        setToken,
        backendURL,
        userData, setUserData,
        userProfile, isDarkMode, setDarkMode, theme, setTheme, textTheme,  toggleDarkMode

    };

    useEffect(() => {

        getDrData();

    }, []);
    useEffect(() => {
        if (token) {
            userProfile()
        }
        else {
            setUserData(false)
        }
    }, [token])

    return (
        <AppContext.Provider value={values}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
