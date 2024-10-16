import {v2 as cloudary}  from "cloudinary"
const connectCloudinary = async () =>{
    cloudary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    })
    console.log("Connected Cloudary")
}
export default connectCloudinary