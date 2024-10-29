import express from "express"
import { doctorList, logInDoctor } from "../controllers/doctorController.js"

const doctorRouter = express.Router()
doctorRouter.get('/list', doctorList)
doctorRouter.post('/doctorlogin', logInDoctor)
export default doctorRouter