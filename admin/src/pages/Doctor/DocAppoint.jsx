import { useContext, useEffect } from "react"
import { DoctorContext } from "../../context/doctorContext"


const DocAppoint = () => {
  const { docToken, DocAppoint, getDocAppoint } = useContext(DoctorContext)

  useEffect(() => {

    getDocAppoint()

  }, [docToken])
  
  useEffect(() => {
    console.log(DocAppoint)
  })
  return (
    <div>DocAppoint</div>
  )
}

export default DocAppoint