import doctorModal from "../models/doctorModal.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import appointmentModel from "../models/appointment.js";


const checkAvailablity = async (req, res) => {
    try {
        const { docId } = req.body;
        const docData = await doctorModal.findById(docId)

        await doctorModal.findByIdAndUpdate(docId, { available: !docData.available })
        res.json({ message: "Doctor's Availability Change. 😊", success: true })

    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message })

    }

}

const doctorList = async (req, res) => {
    try {
        const doctors = await doctorModal.find({}).select(["-password", "-email"])
        res.json({ succes: true, doctors })
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message })


    }
}

const logInDoctor = async (req, res) => {
    try {
        const { email, password } = req.body
        const doctor = await doctorModal.findOne({ email })
        if (!doctor) {
            return res.json({ succes: false, message: "Doctor Not Found" })
        }
        const isMatch = await bcrypt.compare(password, doctor.password)

        if (isMatch) {
            const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET)
            res.status(200).json({ success: true, token })
        }
        else {
            res.json({ succes: false, message: "Invalid Email or Password " })
        }
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message })

    }
}

const docAppointments = async (req, res) => {
    try {
        const { docId } = req.body
        const appointments = await appointmentModel.find({ docId: docId })
        res.json({ success: true, appointments })
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message })
    }
}

const approveAppoint = async (req, res) => {
    try {
        const { docId, appointmentId } = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)

        if (appointmentData && appointmentData.docId === docId) {
            await appointmentModel.findByIdAndUpdate(appointmentId, { isCompleted: true })
            return res.status(200).json({ success: true, message: "Appointment Approved" })
        }
        else {
            return res.json({ success: false, message: "Invalid Appointment" })
        }

    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message })
    }
}
const cancelAppoint = async (req, res) => {
    try {
        const { docId, appointmentId } = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)
        if (appointmentData && appointmentData.docId === docId) {
            await appointmentModel.findByIdAndUpdate(appointmentId, { isCompleted: false })
            return res.status(200).json({ success: true, message: "Appointment Cancelled" })
        }
        else {
            return res.json({ success: false, message: "Invalid Appointment" })
        }

    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message })
    }
}
const doctorDash = async (req, res) => {
    try {
        const { docId } = req.body
        const appointments = await appointmentModel.find({ docId })
        let earnings = 0
        appointments.map(item => {
            if (item.isCompleted) {
                earnings += item.amount
            }
        })
        let patient = []
        appointments.map(item => {
            if (!patient.includes(item.userId)) {
                patient.push(item.userId)
            }
        })
        let dashData = {
            appointments: appointments.length,
            earnings,
            patient,
            latestAppointments: appointments.reverse().splice(0, 5)

        }
        return res.status(200).json({ success: true, dashData })
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message })

    }
}

const getDocProfile = async (req,res) => {
    try {
        const {docId} = req.body
        const docData = await doctorModal.findById(docId).select("-password")
        return res.status(200).json({success:true,docData})

    } catch (error) {
        
    }
}
const updateDocProfile = async (req,res) =>{
    try {
        const {docId , fees, address , available} = req.body
        await doctorModal.findByIdAndUpdate(docId , {fees , address , available})
        return res.status(200).json({success:true,message:"Prifile Updated"})

    } catch (error) {
        
    }
}
export { checkAvailablity, doctorList, logInDoctor, docAppointments, approveAppoint, cancelAppoint, doctorDash, getDocProfile , updateDocProfile }