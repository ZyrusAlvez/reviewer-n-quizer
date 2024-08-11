import express from "express"
import reviewerController from "../controller/reviewerController.mjs"

const reviewerRouter = express.Router()

reviewerRouter.post("/flash-cards", reviewerController.flashCards)
reviewerRouter.post("/fill-blanks", reviewerController.fillBlanks)
reviewerRouter.post("/multiple-choices", reviewerController.multipleChoices)
reviewerRouter.post("/true-or-false", reviewerController.trueOrFalse)

export default reviewerRouter