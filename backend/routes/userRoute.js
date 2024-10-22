import express from "express"
import { registerUser, userlogin } from "../controllers/userController.js"
const userRouter = express.Router()
userRouter.post('/register', registerUser)
userRouter.post("/login" , userlogin)

export default userRouter