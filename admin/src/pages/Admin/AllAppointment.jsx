/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import { useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import Button from '@mui/material/Button';
import { toast } from "react-toastify";

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
        <div className="flex flex-row  gap-20 border py-2 text-white bg-[#7b807b]">
          <p className="text-xs">S.No</p>
          <p className="text-xs">Name</p>
          <p className="text-xs">Date/Time</p>
          <p className="text-xs">Doctor Name</p>
          <p className="text-xs">Status</p>
        </div>

        {
          appointments.map((item, index) => <Card key={index}>
            <CardContent >
              <Typography variant="p" component="div" className="flex flex-row  gap-20 text-xs">
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

      {/* <table className="sm:hidden w-full border" >
        <thead>
          <tr className="flex flex-row  gap-20">
            <th>S.No</th>
            <th>Doctor</th>
            <th>Patient</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            appointments.map((item, index) =>
              <tr key={index} className="flex flex-row  gap-20">
                <td className="text-xs">{index + 1}</td>
                <td className="text-xs">{item.docData?.name}</td>
                <div className="flex flex-col">
                  <td className="text-xs">{item.slotDate}</td>
                  <td className="text-xs">{item.slotTime}</td>
                </div>
                <td className="text-xs">{item.userData?.name}</td>
                <td className="text-xs">{`${item.cancelled ? "Cancelled" : "Confirmed"}`}</td>
              </tr>
            )
          }
        </tbody>
      </table> */}

      <div className="mr-1 sm:hidden">
        {
          appointments.map((item, index) =>
            <div className="w-full bg-[#756e6e] h-auto text-[white] text-center p-2 m-1 " key={index}>
              <div className="flex flex-row gap-32 text-left">
                <p>Sr.No :</p>
                <p className="text-center" >{index + 1}</p>
              </div>
              <hr></hr>
              <div className="flex flex-row gap-12 text-left">
                <p className="font-medium">Doctor:</p>
                <p className="text-center w-full">{item.docData?.name}</p>
              </div>
              <hr></hr>
              <div className="flex flex-row  gap-10">
                <p>Patient:</p>
                <p className="text-center w-full">{item.userData?.name}</p>
              </div>
              <hr></hr>
           
              <hr></hr>
              <div className="flex flex-row  gap-16">
                <p>Date:</p>
                <p className="text-center w-full">{item.slotDate}</p>
              </div>
              <hr></hr>
              <div className="flex flex-row  gap-12">
                <p>Time:</p>
                <p className="text-center w-full">{item.slotTime}</p>
              </div>
              <hr></hr>
              <div className="flex flex-row  gap-10">
                <p>Status:</p>
                <p className="text-center w-full">{`${item.cancelled ? "Cancelled" : "Confirmed"}`}</p>
              </div>
            </div>

          )
        }
      </div>


    </div>
  );
}

export default AllAppointment;
