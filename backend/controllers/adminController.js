import validator from "validator";
import bcrypt from "bcryptjs";
import { v2 as cloudinary } from "cloudinary";
import doctorModal from "../models/doctorModal.js";
import jwt from "jsonwebtoken"
import userModal from "../models/userModal.js";
import appointmentModel from "../models/appointment.js";
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, address, fees } = req.body;
        const imageFile = req.file;

       
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !address || !fees) {
            return res.status(400).json({ message: "Please fill all the fields 🙄", success: false });
        }

        // Validating email w
        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Invalid email 🙄", success: false });
        }

        // Checking for existing email
        const existingDoctor = await doctorModal.findOne({ email });
        if (existingDoctor) {
            return res.status(400).json({ message: "Email already exists 🙄", success: false });
        }

        // Validating password
        if (password.length < 8) {
            return res.status(400).json({ message: "Password must be at least 8 characters 🙄", success: false });
        }

        // Bcrypting password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // Validate file upload
        if (!imageFile) {
            return res.status(400).json({ message: "Please upload an image 🙄", success: false });
        }

        // Upload image to Cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
        const imageUrl = imageUpload.secure_url;

        // Parse the address safely
        let parsedAddress;
        try {
            parsedAddress = JSON.parse(address);
        } catch (e) {
            return res.status(400).json({ message: "Invalid address format 🙄", success: false });
        }

        // Create doctor data object
        const doctorData = {
            name,
            email,
            password: hashPassword,
            speciality,
            degree,
            experience,
            about,
            address: parsedAddress,
            fees,
            image: imageUrl,
            date: Date.now()
        };

        // Save doctor data to the database
        const newDoctor = new doctorModal(doctorData);
        await newDoctor.save();

        res.status(201).json({ message: "Doctor added successfully 😊", success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error. 😵‍💫" });
    }
};

const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET)
            res.status(200).json({ success: true, message: "Admin logged in successfully. 😊", token })

        }
        else {
            return res.status(401).json({ message: "Invalid email or password. 🙄", success: false });
        }

    } catch (error) {
        console.log(error)
        res.status(401).json({ success: false, message: "Some client side problem. 🙄" })
    }
}
const allDoctors = async (req, res) => {
    try {
        const doctors = await doctorModal.find({}).select("-password")
        res.json({ success: true, doctors })


    } catch (error) {
        console.error("Error:", error.message); // Log error for debugging
        return res.status(500).json({ msg: "Server error 😵‍💫", success: false });

    }

}
const appoinmentAdmin = async (req, res) => {
    try {
        const appointments = await appointmentModel.find({})
        res.json({ success: true, appointments })


    } catch (error) {
        console.error("Error:", error.message); // Log error for debugging
        return res.status(500).json({ msg: "Server error 😵‍💫", success: false });
    }
}
const cancelAppointmentAdmin = async (req, res) => {
    try {
        const { appointmentId } = req.body;
        const appointmentData = await appointmentModel.findById(appointmentId);
        if (!appointmentData) {
            return res.status(404).json({ success: false, message: "Appointment not found" });
        }


        await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true });

        const { docId, slotDate, slotTime } = appointmentData;
        const docData = await doctorModal.findById(docId);
        if (!docData) {
            return res.status(404).json({ success: false, message: "Doctor not found" });
        }

        let slot_booked = docData.slot_booked;
        if (slot_booked[slotDate]) {
            slot_booked[slotDate] = slot_booked[slotDate].filter(e => e !== slotTime);
        }

        await doctorModal.findByIdAndUpdate(docId, { $set: { slot_booked } });

        res.status(200).json({ message: "Appointment cancelled 😊", success: true });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
};

const adminDash = async (req, res) => {
    try {
        const doctors = await doctorModal.find({})
        const appointments = await appointmentModel.find({})
        const patients = await userModal.find({})
        const Dashdata = {
            doctors: doctors.length,
            appointments: appointments.length,
            patients: patients.length,
            appointmentsLatest: appointments.reverse().splice(0, 5)

        }
        res.status(200).json({ success: true, Dashdata })


    } catch (error) {
        console.error("Error:", error.message);

        res.status(500).json({ success: false, message: "Server Error" })

    }
}
export { addDoctor, loginAdmin, allDoctors, appoinmentAdmin, cancelAppointmentAdmin, adminDash }
