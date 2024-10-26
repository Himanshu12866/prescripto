import express from "express";
import { addDoctor, adminDash, allDoctors, appoinmentAdmin, cancelAppointmentAdmin, loginAdmin } from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";
import authAdmin from "../middlewares/authAdmin.js";
import { checkAvailablity } from "../controllers/doctorController.js";


const adminRouter = express.Router()

adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor)
adminRouter.post("/login", loginAdmin)
adminRouter.post("/all-doctors", authAdmin, allDoctors)
adminRouter.post("/change-availablity", authAdmin, checkAvailablity)
adminRouter.get("/appointment", authAdmin, appoinmentAdmin)
adminRouter.post("/cancelAppointmentAdmin", authAdmin, cancelAppointmentAdmin)
adminRouter.get("/dashAdmin", adminDash)

export default adminRouter