import express from "express"
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";

const app = express()
const port = process.env.PORT || 4000;
connectDb()

app.use(express.json())

app.use(cors())

connectCloudinary()

app.use("/api/admin" , adminRouter)

app.get( "/" , (req,res) => {
    
res.send("API WORING with api")
})
app.listen(port , () => console.log("Server Sarted at port number" , port))