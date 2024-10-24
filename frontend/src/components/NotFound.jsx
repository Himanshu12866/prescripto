import { useEffect } from "react"
import { toast } from "react-toastify"



const NotFound = () => {
    useEffect(() => {
        toast.dark("404 , Sorry  Not Found ! ")
    })
  return (
    <div className="flex justify-center items-center">
    <div>
        <img src='alert-file.avif' /> 
    </div>

    </div>
  )
}

export default NotFound