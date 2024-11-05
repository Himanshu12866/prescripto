/* eslint-disable react-hooks/exhaustive-deps */
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
      console.log(info);
    }
  }, [aToken]);


  // useEffect(() => {
  //   setInfo(adminDash.appointmentsLatest);
  //   console.log(info);
  // }, [info]);
  useEffect(() => {
    if (adminDash && adminDash.appointmentsLatest) {
      setInfo(adminDash.appointmentsLatest);
    }
  }, [adminDash]);


  return (
    <div className="w-full p-1">
      <Button
        variant="contained"
        color="error"
        style={{ padding: "14px", letterSpacing: "2px", marginTop: "5px" }}
        className="text-center bg-[black] py-3  w-full"
      >
        Dashboard Admin
      </Button>
      <div className="p-1 overflow-x-auto h-[80vh]">
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

        <TableContainer className="hidden sm:block" component={Paper}>

          <Table>
            <TableHead>
              <TableRow className="font-medium text-xl text-white bg-[#22625d] ">
                <TableCell style={{ textAlign: "left", color: "white", fontWeight: "bold", fontSize: "18px" }}>S.No</TableCell>
                <TableCell style={{ textAlign: "left", color: "white", fontWeight: "bold", fontSize: "18px" }}>Doctor</TableCell>
                <TableCell style={{ textAlign: "left", color: "white", fontWeight: "bold", fontSize: "18px" }}>Date & Time</TableCell>
                <TableCell style={{ textAlign: "left", color: "white", fontWeight: "bold", fontSize: "18px" }}>Patient Name</TableCell>
                <TableCell style={{ textAlign: "left", color: "white", fontWeight: "bold", fontSize: "18px" }}>Patient Email</TableCell>
                <TableCell style={{ textAlign: "left", color: "white", fontWeight: "bold", fontSize: "18px" }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {info && info.length > 0 ? (
                info.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell style={{ textAlign: "left", fontSize: "15px" }}>{index + 1}</TableCell>
                    <TableCell style={{ textAlign: "left", fontSize: "15px" }}>{item.docData?.name || "N/A"}</TableCell>
                    <TableCell style={{ textAlign: "left", fontSize: "15px" }}>{item.slotDate} & {item.slotTime}</TableCell>
                    <TableCell style={{ textAlign: "left", fontSize: "15px" }}>{item.userData?.name || "N/A"}</TableCell>
                    <TableCell style={{ textAlign: "left", fontSize: "15px" }}>{item.userData?.email || "N/A"}</TableCell>
                    <p
                      className={`rounded-lg m-1 text-center py-3 ${item.cancelled ? "bg-[#c13c3c] text-[#ffffff]" : "bg-[green] text-[white]"}`}
                    >
                      {item.cancelled ? "Cancelled" : "Confirmed"}
                    </p>

                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6}>No appointments found</TableCell>
                </TableRow>
              )}
            </TableBody>

          </Table>
        </TableContainer>
        <div className="mr-1 sm:hidden">
        {
          info.map((item, index) =>
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
    </div>
  );
};

export default Dashboard;
