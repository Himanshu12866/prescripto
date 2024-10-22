import express from "express"
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";

const app = express()
const port = process.env.PORT || 4000;
connectDb()
connectCloudinary()
app.use(express.json())

app.use(cors())


app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)
app.use("/api/user", userRouter)

app.get("/", (req, res) => {
    res.send("API WORING with api")
})
app.listen(port, () => console.log("Server Sarted at port number", port))