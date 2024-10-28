import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../context/AdminContext";
import Button from "@mui/material/Button";
import { assets } from "../../assets/assets";
import {
  Card,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  Paper,
  TableBody,
} from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { CardMedia } from "@mui/material";

const Dashboard = () => {
  const { adminDash, aToken, getAdminDash } = useContext(AdminContext);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    if (aToken) {
      getAdminDash();
      console.log(adminDash);
      setInfo(adminDash.appointmentsLatest);
      console.log(info);
    }
  }, [aToken]);

  useEffect(() => {
    console.log(info);
  }, [info]);

  return (
    <div className="w-full p-1">
      <Button
        variant="contained"
        color="error"
        style={{ padding: "14px", letterSpacing: "2px", marginTop: "5px" }}
        className="text-center bg-[black] py-3  w-full"
      >
        Dashboard
      </Button>
      <div>
        <div className="flex flex-col sm:flex-row gap-1 sm:justify-around m-3 w-[90%] sm:w-[80%]">
          <Card style={{ width: "230px", height: "240px" }}>
            <CardMedia component="img" image={assets.docgrp} alt="Doctors" />
            <CardContent>
              <Typography style={{ textAlign: "center" }} variant="h6">
                <h1>Doctors: <span>{adminDash.doctors}</span></h1>
              </Typography>
            </CardContent>
          </Card>
          <Card style={{ width: "230px", height: "240px", textAlign: "center" }}>
            <CardMedia
              component="img"
              style={{ height: "180px", width: "100%", translate: "12px" }}
              image={assets.cal}
              alt="Appointments"
            />

            <CardContent>
              <Typography style={{ textAlign: "center" }} variant="h6">
                <h1>Appointments: <span>{adminDash.appointments}</span></h1>
              </Typography>
            </CardContent>
          </Card>
          <Card style={{ width: "230px", height: "240px", textAlign: "center" }}>
            <CardMedia
              component="img"
              style={{ height: "180px", width: "100%", paddingTop: "10px" }}
              image={assets.pat}
              alt="Patients"
            />
            <CardContent>
              <Typography style={{ textAlign: "center" }} variant="h6">
                <h1>Patients: <span>{adminDash.patients}</span></h1>
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="w-full px-5 bg-[#604d4d] text-white font-medium py-2 my-2">
          <h1>Latest Appointments</h1>
        </div>

        <TableContainer component={Paper}>
        
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>S.No</TableCell>
                <TableCell>Doctor</TableCell>
                <TableCell>Date & Time</TableCell>
                <TableCell>Patient Name</TableCell>
                <TableCell>Patient Email</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {info.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.docName.name}</TableCell>
                  <TableCell>{item.slotDate} & {item.slotTime}</TableCell>
                  <TableCell>{item.userData.name}</TableCell>
                  <TableCell>{item.userData.email}</TableCell>
                  <TableCell>{item.cancelled}</TableCell>
                </TableRow>
              ))} */}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Dashboard;
