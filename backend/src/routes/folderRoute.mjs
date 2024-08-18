import express from "express";
import folderController from "../controller/folderController.mjs";

const folderRouter = express.Router();

folderRouter.post("/initial", folderController.initialSetUp);
folderRouter.post("/getFolder", folderController.getFolder);
folderRouter.get("/verify/:id", folderController.verifyFolder);
folderRouter.post("/add-folder", folderController.addFolder);
folderRouter.post("/add-reviewer", folderController.addReviewerToFolder);
folderRouter.post("/edit-json", folderController.editjson)

export default folderRouter;
