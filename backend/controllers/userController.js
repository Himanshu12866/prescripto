
import validator from "validator";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import userModal from "../models/userModal.js";
import { v2 as cloudinary } from "cloudinary"
import doctorModal from "../models/doctorModal.js";
import appointmentModel from "../models/appointment.js";
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Please fill in all fields. 🙄" });
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Invalid email address. 🙄" });
        }
        if (password.length < 8) {
            return res.status(400).json({ message: "Password must be at least 8 characters 🙄" })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);
        const userData = {
            name,
            email,
            password: hashedPassword
        }
        const newUser = new userModal(userData)
        const user = await newUser.save()
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        res.json({ success: true, token })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Somethig went wrong 😵‍💫" })
    }
}

const userlogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModal.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password. 🙄" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            res.json({ success: true, token })
        }
        else {
            return res.status(400).json({ message: "Invalid email or password 🙄" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Somethig went wrong 🙄" })

    }
}

const getProfile = async (req, res) => {
    try {
        const { userId } = req.body;
        const userData = await userModal.findById(userId).select("-password")
        res.json({ success: true, userData })
    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: "Somethig went wrong 😵‍💫" })
    }
}

const updateProfile = async (req, res) => {
    try {
        const { userId, name, gender, address, dob, phone } = req.body;
        const imageFile = req.file

        if (!name || !gender || !dob || !phone) {
            return res.status(400).json({ message: "Please fill all the fields 🙄", success: false })
        }
        await userModal.findByIdAndUpdate(userId, { name, gender, dob, phone, address: JSON.parse(address) })
        if (imageFile) {
            const image = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })
            const imageURL = image.secure_url
            await userModal.findByIdAndUpdate(userId, { image: imageURL })
        }
        res.json({ success: true, message: "Profile updated successfully 😊" })
    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: "Somethig went wrong 😵‍💫" })
    }

}

const bookAppointment = async (req, res) => {
    try {
        const { userId, docId, slotDate, slotTime } = req.body;
        const docData = await doctorModal.findById(docId).select("-password")
   
        if (!docData.available) {
            return res.status(400).json({ message: "Doctor is not available 😑", success: false })
        }
        let slot_booked = docData.slot_booked;
        if (slot_booked[slotDate]) {
            if (slot_booked[slotDate].includes(slotTime)) {
                return res.status(400).json({ message: "Slot already booked 😒", success: false })
            }
            else {
                slot_booked[slotDate].push(slotTime)
            }

        }
        else {
            slot_booked[slotDate] = []
            slot_booked[slotDate].push(slotTime)
        }

        let userData = await userModal.findById(userId).select("-password")
        delete docData.slot_booked
        const appointmentData = {
            userId,
            docId,
            userData,
            amount: docData.fees,
            docData,
            slotDate,
            slotTime,
            date: Date.now()
        }

        const newAppointment = new appointmentModel(appointmentData)
        await newAppointment.save()
        await doctorModal.findByIdAndUpdate(docId, { slot_booked })
        res.status(200).json({ message: "Appointment booked 😊", success: true })

    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: "Something went wrong 😢" })

    }
}


// const listAppointment = async (req, res) => {
//     try {
//         const { userId } = req.body;
//         const appointmentData = await appointmentModel.find({ userId })
//         res.json({ success: true, appointmentData })
//     } catch (error) {
//         console.log(error)
//         res.status(400).json({ success: false, message: "Something went wrong 😢" })

//     }
// }
const listAppointment = async (req, res) => {
    try {
        const {userId} = req.body
      const appointments = await appointmentModel.find({ userId });
      res.status(200).json({ success: true, appointments });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Failed to fetch appointments" });
    }
  };
  
export { registerUser, userlogin, getProfile, updateProfile, bookAppointment, listAppointment }