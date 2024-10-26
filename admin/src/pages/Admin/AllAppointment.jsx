import { useContext } from "react";
import { useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import Button from '@mui/material/Button';
// import { Modal, Box, Typography } from "@mui/material";

const AllAppointment = () => {
  const { appointments, aToken, getAllAppointment } = useContext(AdminContext);

  // State to manage modal open/close
  // const [open, setOpen] = useState(false);

  // // Handlers to open and close modal
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  useEffect(() => {
    if (aToken) {
      getAllAppointment();
      console.log(appointments);
    } else {
      console.log("no token");
    }
  }, [aToken]);

  // Define the modal box style
  // const style = {
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   width: 400,
  //   bgcolor: 'background.paper',
  //   boxShadow: 24,
  //   p: 4,
  //   borderRadius: 2,
  // };

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
          <div className="border py-2 px-2 mt-3 hidden sm:grid grid-cols-[0.5fr_3fr_1fr_4fr_3fr_1fr_2fr] grid-flow-col">
            <p>{index + 1}</p>
            <p className="text-center font-medium">{item.userData?.name}</p>
            <p className="text-[15px]">{item.userData?.email}</p>
            <p className="text-center">
              <span>{item.slotDate || "Na"}</span> &nbsp; <span>{item.slotTime || "Na"}</span>
            </p>
            <div className="flex flex-row gap-4" >
              <img style={{ width: "40px", height: "35px", borderRadius: "50%" }} src={item.docData?.image} />
              <p className="text-center font-semibold">{item.docData?.name}</p>
            </div>
            <p className="font-medium">&#8377; {item.docData?.fees}</p>
            <p>
              <Button variant="outlined" color="error" disableElevation>
                Cancel
              </Button>
            </p>
          </div>
         
        </div>
      ))}
      {/* <Button onClick={handleOpen} variant="contained">Open Modal</Button> */}

      {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <p>{item.docData?.name}</p>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <img src={item.docData?.image} />
              </Typography>
            </Box>
          </Modal> */}

    </div>
  );
}

export default AllAppointment;
