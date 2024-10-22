
import validator from "validator";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import userModal from "../models/userModal.js";
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Please fill in all fields." });
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Invalid email address." });
        }
        if (password.lenght < 8) {
            return res.status(400).json({ message: "Password must be at least 8 characters" })
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
        res.json({ success: false, message: "Somethig went wrong" })
    }
}

const userlogin = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await userModal.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            res.json({ success: true, token })
        }
        else{
            return res.status(400).json({ message: "Invalid email or password" })
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Somethig went wrong" })

    }
}
export { registerUser  , userlogin}