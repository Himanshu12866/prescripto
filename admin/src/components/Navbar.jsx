import { useContext } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import { DoctorContext } from "../context/doctorContext";
import { Avatar, Button } from "@mui/material";
// import { DarkModeSwitch } from 'react-toggle-dark-mode';
// import AppContextProvider from "../context/appContext";

const Navbar = () => {
  const navigate = useNavigate();
  // const {isDarkMode , toggleDarkMode} = useContext(AppContextProvider)
  const { aToken, setAToken } = useContext(AdminContext);
  const { docToken, setDocToken, } = useContext(DoctorContext);

  function LogOut() {
    navigate("/");
    if (aToken) {
      setAToken('');
      localStorage.removeItem("AdminToken");
    }
    if (docToken) {
      setDocToken('');
      localStorage.removeItem("DoctorToken");
    }
  }

  return (
    <div className="flex items-center justify-between border sticky border-gray-300 bg-white sm:px-10 py-3 px-4 w-full">
      <div className="flex sm:items-center flex-col sm:flex-row text-xs gap-3">
        <img className="w-36 sm:w-40 cursor-pointer translate-x-28 sm:translate-x-0" src={assets.logo} />
        <p className="font-medium text-sm rounded-md flex justify-between gap-1 items-center text-black shadow-sm px-4 py-1">
          <Avatar color="danger" size="sm" style={{ backgroundColor: "red" }} />

          {aToken ? <span className="border rounded-2xl bg-[#e83b3b] text-white px-5 py-1">Admin</span> : <span className="border rounded-2xl bg-[#e3e1e1] px-5 py-1">Doctor</span>}
        </p>
        {/* <DarkModeSwitch
          style={{ marginBottom: '2rem' }}
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={30}
        /> */}
      </div>
      {(aToken || docToken) ? (
        <Button onClick={LogOut} variant="outlined" color="error" className="bg-gray-100 translate-y-7 sm:translate-y-0  text-black font-medium px-4 sm:px-4 py-1 shadow-sm rounded-full">Log Out</Button>
      ) : (
        <Button className="bg-gray-100 text-black font-medium px-4 py-1 shadow-sm rounded-full">Log In</Button>
      )}
    </div>
  );
}

export default Navbar;
