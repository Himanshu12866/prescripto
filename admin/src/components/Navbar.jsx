import { useContext } from "react"
import { assets } from "../assets/assets"
import { AdminContext } from "../context/AdminContext";
import {useNavigate} from "react-router-dom" 
const Navbar = () => {
  let navigate = useNavigate()
    const {aToken ,setAToken} = useContext(AdminContext)
    function LogOut(){
      navigate("/")
        aToken && setAToken('')
        aToken && localStorage.removeItem("AdminToken")

    }

  return (
    <div className="flex items-center justify-between border border-gray-300 sm:px-10 py-3 px-4 w-full">
        <div className="flex items-center text-xs gap-3">
            <img className="w-36 sm:w-40 cursor-pointer" src={assets.logo}/>
            <p className="font-medium text-sm border rounded-full bg-gray-100 text-black  shadow-sm px-4 py-1">{aToken ? "Admin" : "Doctor"}</p>
        </div>
        <button onClick={LogOut} className="bg-gray-100 text-black font-medium px-4 py-1 shadow-sm rounded-full">Log Out</button>
    </div>
  )
}

export default Navbar