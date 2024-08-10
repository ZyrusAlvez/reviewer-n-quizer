import express from "express"
import reviewerController from "../controller/reviewerController.mjs"

const reviewerRouter = express.Router()

reviewerRouter.post("/flash-cards", reviewerController.flashCards)
reviewerRouter.post("/fill-blanks", reviewerController.fillBlanks)
reviewerRouter.post("/multiple-choices", reviewerController.multipleChoices)

export default reviewerRouter