import express from "express";
import folderController from "../controller/folderController.mjs";

const folderRouter = express.Router();

folderRouter.post("/initial", folderController.initialSetUp);
folderRouter.get("/verify/:id", folderController.verifyFolder);
folderRouter.post("/add-folder", folderController.addFolder);
folderRouter.post("/add-reviewer", folderController.addReviewerToFolder);

export default folderRouter;
