import { useContext } from "react";
import { useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import Button from '@mui/material/Button';
import { toast } from "react-toastify";
import { Table, TableContainer } from "@mui/material";
import {

  TableCell,

  TableHead,
  TableRow,

  Paper,
  TableBody,
} from "@mui/material";
// import { AppContext } from "../../context/appContext";


const AllAppointment = () => {
  const { appointments, aToken, getAllAppointment, cancelAppointmentAdmin } = useContext(AdminContext);
  // const { SlotFormat } = useContext(AppContext)




  useEffect(() => {
    if (aToken) {
      getAllAppointment();
      // console.log(appointments);
    } else {
      toast.warning("Sorry No Token found. 😒")
    }
  }, [aToken]);


  return (
    <div className="w-full p-1">
      <p className="px-5 py-3 font-medium w-full bg-black text-center text-white">All Appointment</p>
      <div className="w-full">
        <div className="border py-2 px-2 mt-3 bg-[#042613b8] text-[#decddb] font-bold hidden sm:grid grid-cols-[0.5fr_3fr_1fr_4fr_3fr_1fr_2fr] grid-flow-col">
          <p>Sr.No</p>
          <p className="text-center">Patient</p>
          <p>Email</p>
          <p className="text-center">Date & Time</p>
          <p className="text-center">Doctor</p>
          <p>Fees</p>
          <p>Actions</p>
        </div>
      </div>
      {appointments.map((item, index) => (
        <div className="hidden sm:block" key={index}>
          <div className="border py-2 px-2 mt-3 sm:grid grid-cols-[0.5fr_3fr_1fr_4fr_3fr_1fr_2fr] grid-flow-col">
            <p>{index + 1}</p>
            <p className="text-center font-medium">{item.userData?.name}</p>
            <p className="text-[15px]">{item.userData?.email}</p>
            <p className="text-center">
              <span>{(item.slotDate) || "Na"}</span> &nbsp; <span>{item.slotTime || "Na"}</span>
            </p>
            <div className="flex flex-row gap-4" >
              <img style={{ width: "40px", height: "35px", borderRadius: "50%" }} src={item.docData?.image} />
              <p className="text-center font-semibold">{item.docData?.name}</p>
            </div>
            <p className="font-medium">&#8377; {item.docData?.fees}</p>
            <p>
              {item.cancelled ? <Button variant="outlined" color="error" disableElevation>
                Cancelled
              </Button> : <Button onClick={() => cancelAppointmentAdmin(item._id)} variant="outlined" color="error" disableElevation>
                Cancel
              </Button>}
            </p>
          </div>

        </div>
      ))}

      {/* <div className="sm:hidden">
        <div className="flex flex-row justify-between border py-2 text-white bg-[#7b807b]">
          <p className="text-xs">S.No</p>
          <p className="text-xs">Name</p>
          <p className="text-xs">Date/Time</p>
          <p className="text-xs">Doctor Name</p>
          <p className="text-xs">Status</p>
        </div>

        {
          appointments.map((item, index) => <Card key={index}>
            <CardContent >
              <Typography variant="p" component="div" className="flex flex-row justify-between text-xs">
                <p className="text-[10px]">{index + 1} .</p>
                <p className="text-[10px]">{item.userData?.name}</p>
                <div className="flex flex-col text-center text-[10px]">
                  <p className="text-[10px]">{item.slotDate}</p>
                  <p className="text-[10px]">{item.slotTime}</p>
                </div>
                <p className="text-[10px]">{item.docData?.name}</p>
                <p className="text-[10px]">
                  {item.cancelled ? <button >
                    Cancelled
                  </button> : <button onClick={() => cancelAppointmentAdmin(item._id)} >
                    Cancel
                  </button>}
                </p>
              </Typography>
            </CardContent>
          </Card>)
        }
      </div> */}



      <TableContainer component={Paper} className="sm:hidden overflow-hidded">

        <Table className="overfolw-x-scroll">
          <TableHead>
            <TableRow className="font-medium py-0 text-white bg-[#22625d] ">
              <TableCell style={{ textAlign: "left", color: "white", fontWeight: "bold", fontSize: "12px" }}>S.No</TableCell>
              <TableCell style={{ textAlign: "left", color: "white", fontWeight: "bold", fontSize: "12px" }}>Doctor</TableCell>
              <TableCell style={{ textAlign: "left", color: "white", fontWeight: "bold", fontSize: "12px" }}>Date & Time</TableCell>
              <TableCell style={{ textAlign: "left", color: "white", fontWeight: "bold", fontSize: "12px" }}>Patient Name</TableCell>
              <TableCell style={{ textAlign: "left", color: "white", fontWeight: "bold", fontSize: "12px" }}>Patient Email</TableCell>
              <TableCell style={{ textAlign: "left", color: "white", fontWeight: "bold", fontSize: "12px" }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              appointments.map((item, index) => (
                <TableRow key={index}>
                  <TableCell style={{ textAlign: "left", fontSize: "12px" }}>{index + 1}</TableCell>
                  <TableCell style={{ textAlign: "left", fontSize: "12px" }}>{item.docData?.name}</TableCell>
                  <div className="flex flex-col">
                    <TableCell style={{ textAlign: "left", fontSize: "12px" }}>{item.slotDate}</TableCell>
                    <TableCell style={{ textAlign: "left", fontSize: "12px" }}>{item.slotTime}</TableCell>
                  </div>
                  <TableCell style={{ textAlign: "left", fontSize: "12px" }}>{item.userData?.name}</TableCell>
                  <TableCell style={{ textAlign: "left", fontSize: "12px" }}>{item.userData?.email}</TableCell>
                  <p
                    className={`rounded-lg m-1 text-center py-3 ${item.cancelled ? "bg-[#c13c3c] text-[#ffffff]" : "bg-[green] text-[white]"}`}
                  >
                    {item.cancelled ? "Cancelled" : "Confirmed"}
                  </p>
                </TableRow>
              ))
            }
          </TableBody>

        </Table>
      </TableContainer>
    </div>
  );
}

export default AllAppointment;
