import { useContext, useEffect } from "react"
import { DoctorContext } from "../../context/doctorContext"
import { TableContainer, Table, TableHead, TableCell, TableBody, Button } from "@mui/material"



const DocAppoint = () => {
  const { docToken, DocAppoint, getDocAppoint, acceptAppointment, rejectAppointment } = useContext(DoctorContext)
  const month = [" ", "Jan", "Fer", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const SlotFormat = (slotDate) => {
    const formattedTime = slotDate.split("-");
    return formattedTime[0] + " " + month[Number(formattedTime[1])] + " " + formattedTime[2]
  }

  useEffect(() => {

    getDocAppoint()

  }, [docToken])

  useEffect(() => {
    console.log(DocAppoint)
  })
  return (
    <div className="w-full p-1">

      <Button className="w-full" style={{ paddingTop: "10px", paddingBottom: "10px" }} variant="contained" color="success">Latest Appointments</Button>
      <div>
        <TableContainer>
          <Table style={{ marginTop: "10px" }}>
            <TableHead style={{ backgroundColor: "#ebe5e5" }} >
              <TableCell style={{ color: "black", fontWeight: "bolder", textAlign: "center" }}>Sr.No</TableCell>
              <TableCell style={{ color: "black", fontWeight: "bolder", textAlign: "center" }}>Patient Name</TableCell>
              <TableCell style={{ color: "black", fontWeight: "bolder", textAlign: "center" }}>Patient &apos; Email</TableCell>
              <TableCell style={{ color: "black", fontWeight: "bolder", textAlign: "center" }}>Date & Time</TableCell>

              <TableCell style={{ color: "black", fontWeight: "bolder", textAlign: "center" }}>Phone No.</TableCell>
              <TableCell style={{ color: "black", fontWeight: "bolder", textAlign: "center" }}>Payment</TableCell>
              <TableCell style={{ color: "black", fontWeight: "bolder", textAlign: "center" }}>Amount</TableCell>
              <TableCell style={{ color: "black", fontWeight: "bolder", textAlign: "center" }}>Actions</TableCell>
              {/* <TableCell style={{ color: "black", fontWeight: "bolder", textAlign: "center" }}>Cancel</TableCell> */}
            </TableHead>
            {
              DocAppoint.map((item, index) => (
                <TableBody key={index} >
                  <TableCell className="font-medium">{index + 1}.</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>{item.userData.name}</TableCell>
                  <TableCell>{item.userData.email}</TableCell>
                  <TableCell className="bi bi-calendar3">&nbsp;{SlotFormat(item.slotDate)} <span className="bi bi-clock-fill"></span> {item.slotTime}</TableCell>
                  <TableCell>{item.userData.phone}</TableCell>
                  <Button className="p-5" style={{ backgroundColor: `${item.paymentStatus ? 'green' : 'red'}`, color: "white", textAlign: "center", marginTop: "5px" }} >{`${item.paymentStatus ? 'Paid' : 'Pending'}`}</Button>
                  <TableCell>&#8377; {item.amount}</TableCell>
                  {
                    item.isCompleted ?
                      <p>Completed</p>
                      :
                      item.cancelled ?
                        <p>Cancelled</p>
                        :
                        <div className="flex flex-row gap-3">
                          <button onClick={() => { acceptAppointment(item._id) }} style={{ marginTop: "5px", borderRadius: "50%", fontSize: "20px" }}>Confirem</button>
                          <button onClick={() => { rejectAppointment(item._id) }} style={{ marginTop: "5px", border: "3px solid green", borderRadius: "50%", width: "30px", height: "30px", fontSize: "20px" }} ><span className="bi bi-x"></span></button>
                        </div>

                  }               {/* <p> <Button variant="contained">Cancel</Button></p> */}
                </TableBody>
              ))
            }
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default DocAppoint