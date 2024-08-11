import express from "express"
import userController from "../controller/userController.mjs"


const userRouter = express.Router()

userRouter.post("/log-in", userController.login)
userRouter.post("/sign-in", userController.signin)

export default userRouter