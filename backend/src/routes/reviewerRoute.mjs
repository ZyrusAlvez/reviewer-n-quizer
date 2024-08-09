import express from "express"
import { reviewerController } from "../controller/reviewerController.mjs"

const reviewerRouter = express.Router()

reviewerRouter.post("/flash-cards", reviewerController.flashCards)

export default reviewerRouter