


import App from "./src/App"

// import { useContext } from 'react';
import { AppContext } from "./src/context/appContext";
import { useContext } from "react";



const Root = () => {
    const {theme} = useContext(AppContext)
    return (
        <div style={{backgroundColor: `${theme === '#0f1214'} ? '#0f1214' : 'white'`}}>
            <App />
        </div>
    )
}

export default Root