import { useContext } from "react";
import { useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import Button from '@mui/material/Button';
// import { AppContext } from "../../context/appContext";


const AllAppointment = () => {
  const { appointments, aToken, getAllAppointment, cancelAppointmentAdmin } = useContext(AdminContext);
  // const { SlotFormat } = useContext(AppContext)




  useEffect(() => {
    if (aToken) {
      getAllAppointment();
      console.log(appointments);
    } else {
      console.log("no token");
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
        <div key={index}>
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
    </div>
  );
}

export default AllAppointment;
