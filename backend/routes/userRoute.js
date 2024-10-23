import express from "express"
import { getProfile, registerUser, userlogin } from "../controllers/userController.js"
import authUser from "../middlewares/authUser.js"
const userRouter = express.Router()
userRouter.post('/register', registerUser)
userRouter.post("/login", userlogin)
userRouter.get("/get-profile", authUser, getProfile)


export default userRouter