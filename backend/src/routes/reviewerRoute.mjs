import express from "express"
import { reviewerController } from "../controller/reviewerController.mjs"

const reviewerRouter = express.Router()

reviewerRouter.post("/", reviewerController)

export default reviewerRouter