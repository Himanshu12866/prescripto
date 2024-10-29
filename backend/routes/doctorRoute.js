import express from "express"
import { approveAppoint, cancelAppoint, docAppointments, doctorDash, doctorList, logInDoctor } from "../controllers/doctorController.js"
import authDoc from "../middlewares/authDoctor.js"

const doctorRouter = express.Router()
doctorRouter.get('/list', doctorList)
doctorRouter.post('/doctorlogin', logInDoctor)
doctorRouter.get('/getappointment', authDoc, docAppointments)
doctorRouter.post('/approveappoint', authDoc, approveAppoint)
doctorRouter.post('/cancelappoint', authDoc, cancelAppoint)
doctorRouter.get('/docdash', authDoc, doctorDash)

export default doctorRouter