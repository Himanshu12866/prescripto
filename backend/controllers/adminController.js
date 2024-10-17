import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import doctorModal from "../models/doctorModal.js";
import jwt from "jsonwebtoken"
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, address, fees } = req.body;
        const imageFile = req.file;

        // Validating all fields must be filled
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !address || !fees) {
            return res.status(400).json({ message: "Please fill all the fields", success: false });
        }

        // Validating email with help of validator package
        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Invalid email", success: false });
        }

        // Checking for existing email
        const existingDoctor = await doctorModal.findOne({ email });
        if (existingDoctor) {
            return res.status(400).json({ message: "Email already exists", success: false });
        }

        // Validating password
        if (password.length < 8) {
            return res.status(400).json({ message: "Password must be at least 8 characters", success: false });
        }

        // Bcrypting password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // Validate file upload
        if (!imageFile) {
            return res.status(400).json({ message: "Please upload an image", success: false });
        }

        // Upload image to Cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
        const imageUrl = imageUpload.secure_url;

        // Parse the address safely
        let parsedAddress;
        try {
            parsedAddress = JSON.parse(address);
        } catch (e) {
            return res.status(400).json({ message: "Invalid address format", success: false });
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

        res.status(201).json({ message: "Doctor added successfully", success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const loginAdmin = async () => {
    try {
        const { email, password } = req.body;
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET)
            res.status(200).json({ success: true, message: "Admin logged in successfully", token })

        }
        else {
            return res.status(401).json({ message: "Invalid email or password", success: false });
        }

    } catch (error) {
        console.log(error)
        res.status(401).json({ success: false, message: "Some client side problem" })
    }
}
export { addDoctor, loginAdmin }
