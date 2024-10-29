import { useContext, useEffect } from "react"
import { DoctorContext } from "../../context/doctorContext"
import { TableContainer, Table, TableHead, TableCell, TableBody, Button } from "@mui/material"



const DocAppoint = () => {
  const { docToken, DocAppoint, getDocAppoint } = useContext(DoctorContext)

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
              <TableCell style={{ color: "black", fontWeight: "bolder" , textAlign:"center" }}>Sr.No</TableCell>
              <TableCell style={{ color: "black", fontWeight: "bolder" , textAlign:"center" }}>Patient Name</TableCell>
              <TableCell style={{ color: "black", fontWeight: "bolder" , textAlign:"center" }}>Patient &apos; Email</TableCell>
              <TableCell style={{ color: "black", fontWeight: "bolder" , textAlign:"center" }}>Date & Time</TableCell>
              <TableCell style={{ color: "black", fontWeight: "bolder" , textAlign:"center" }}>Status</TableCell>
              <TableCell style={{ color: "black", fontWeight: "bolder" , textAlign:"center" }}>Phone No.</TableCell>
              <TableCell style={{ color: "black", fontWeight: "bolder" , textAlign:"center" }}>Payment</TableCell>
              <TableCell style={{ color: "black", fontWeight: "bolder" , textAlign:"center" }}>Amount</TableCell>
              <TableCell style={{ color: "black", fontWeight: "bolder" , textAlign:"center" }}>Approve</TableCell>
              <TableCell style={{ color: "black", fontWeight: "bolder" , textAlign:"center" }}>Cancel</TableCell>
            </TableHead>
            {
              DocAppoint.map((item, index) => (
                <TableBody key={index} >
                  <TableCell className="font-medium">{index + 1}.</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>{item.userData.name}</TableCell>
                  <TableCell>{item.userData.email}</TableCell>
                  <TableCell>{item.slotTime} || {item.slotDate}</TableCell>
                  <Button style={{ backgroundColor: `${item.isCompleted ? 'green' : "red"}`, color: "white", textAlign: "center", marginTop: "5px" }}>{`${item.isCompleted ? 'Confirmed' : 'Pending'}`}</Button>
                  <TableCell>{item.userData.phone}</TableCell>
                  <Button className="p-5" style={{ backgroundColor: `${item.paymentStatus ? 'green' : 'red'}`, color: "white", textAlign: "center", marginTop: "5px" }} >{`${item.paymentStatus ? 'Paid' : 'Pending'}`}</Button>
                  <TableCell>&#8377; {item.amount}</TableCell>
                  <Button variant="contained" style={{ marginTop: "5px" }}>Confirm</Button>    
                  <TableCell style={{paddingTop:"2px"}}><Button style={{width:"100px" ,backgroundColor:"red" , marginTop:"2px", color:"white" , paddingLeft:"5px"}}>Cancel</Button></TableCell>           
                 {/* <p> <Button variant="contained">Cancel</Button></p> */}
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