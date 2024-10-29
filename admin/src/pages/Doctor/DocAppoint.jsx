import { useContext, useEffect } from "react"
import { DoctorContext } from "../../context/doctorContext"


const DocAppoint = () => {
  const { docToken, docAppoint, getDocAppoint } = useContext(DoctorContext)
  useEffect(() => {
    getDocAppoint()
  }, [docToken])
  useEffect(() => {
    console.log(docAppoint)
  })
  return (
    <div>DocAppoint</div>
  )
}

export default DocAppoint