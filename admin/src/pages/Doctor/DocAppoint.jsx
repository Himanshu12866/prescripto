/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react"
import { DoctorContext } from "../../context/doctorContext"
import { TableContainer, Table, TableHead, TableCell, TableBody, Button, Card, CardContent, Typography } from "@mui/material"



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
        <TableContainer className="hidden sm:block">
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

        <div className="sm:hidden w-72 block mt-3">

          <Button variant="outlined" color="success" className="w-full my-4">Patients Details </Button>
          {
            DocAppoint.map((item, index) =>
              <Card key={index} className="my-5 border border-[green] p-1" >

                <div className="flex flex-row border-b-2 border-[black] justify-around">
                  <Typography>Sr.No</Typography>
                  <Typography>{index + 1}</Typography>
                </div>
                <CardContent>
                  <div className="flex flex-row justify-between gap-16 ">
                    <Typography><span className="bi bi-person"></span> Name </Typography>
                    <Typography>{item.userData.name}</Typography>
                  </div>
                  <div className="flex flex-row justify-between  gap-14 ">
                    <Typography className="text-xs" label="body-sm"><i className="bi bi-envelope-at"></i> Email </Typography>
                    <Typography className="text-xs" label="body-sm">{item.userData.email}</Typography>
                  </div>
                  <div className="flex flex-row gap-24 justify-between ">
                    <Typography><span className="bi bi-calendar3"></span> Date </Typography>
                    <Typography>{SlotFormat(item.slotDate)}</Typography>
                  </div>
                  <div className="flex flex-row gap-24 justify-between ">
                    <Typography > <span className="bi bi-clock"></span>Time </Typography>
                    <Typography>{item.slotTime}</Typography>
                  </div>

                  <div className="flex flex-row justify-between items-start ">
                    <Typography className="pr-20 "> <span className="bi bi-wallet2"></span>Fees </Typography>
                    <Typography >&#8377; {item.amount}</Typography>
                  </div>
                  <div className="flex flex-row justify-between">
                    <Typography className="pr-14"> <span className="bi bi-telephone"></span>Phone No. </Typography>
                    <Typography>{item.userData.phone}</Typography>
                  </div>
                  <div className="flex flex-row justify-between items-center gap-16 ">
                    <Typography><span className="bi bi-check-circle"></span> Payment </Typography>
                    <button className="px-5 py-1" style={{ backgroundColor: `${item.paymentStatus ? 'green' : 'red'}`, color: "white", textAlign: "center", marginTop: "5px" }} >{`${item.paymentStatus ? 'Paid' : 'Pending'}`}</button>
                  </div>
                </CardContent>
                <Typography className="text-center border py-1 border-[green]">Appoinment Status</Typography>

                {
                  item.isCompleted ?
                    <p className="w-full bg-[green] text-white text-center py-1 my-2">Completed</p>
                    :
                    item.cancelled ?
                      <p className="w-full bg-[red] text-white text-center py-1 my-2">Cancelled</p>
                      :
                      <CardContent orientation="horizontal " className="flex flex-row gap-16" >
                        <button className="px-5 bg-[green] text-white py-1.5 hover:bg-[#678967] transition-all duration-200 hover:text-white" onClick={() => { acceptAppointment(item._id) }}>Confirm</button>
                        <button className="px-5 border border-[red] py-1 hover:bg-[red] transition-all duration-200 hover:text-white" onClick={() => { rejectAppointment(item._id) }}  >Cancel</button>
                      </CardContent>

                }

              </Card>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default DocAppoint