import validator from "validator";
import bcrypt from "bcrypt" ;
import { v2 as cloudinary } from "cloudinary";
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, address, fees } = req.body
        const imageFile = req.file;
        // Validating all fields must be fill
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !address || !fees) {
            return res.status(400).json({ message: "Please fill all the fields", success: false })
        }
        //validating email with help of validator package
        if(!validator.isEmail(email)){
            return res.status(400).json({ message: "Invalid email", success: false })
        }

        // validating password
        if(password.length < 8){
            return res.status(400).json({ message: "Password must be at least 8 characters", success: false })
        }

        // bcrypting password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
    
        // upload image url to the databse
        const imgaeUpload = await cloudinary.uploader.upload(imageFile.path , {resource_type : "image"})

        const imageUrl = imgaeUpload.secure_url;

        const doctorData= {
            name,
            email,
            password: hashPassword,
            speciality,
            degree,
            experience,
            about,
            address:JSON.parse(address),
            fees,
            image: imageUrl, 
            date: Date.now()

        }

    } catch (error) {

    }
}
export default addDoctor