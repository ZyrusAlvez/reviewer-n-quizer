import express from "express"
import importController from "../controller/importController.mjs"

const importRouter = express.Router()

importRouter.post("/youtube", importController.youtube)

export default importRouter