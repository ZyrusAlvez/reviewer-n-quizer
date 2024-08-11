import express from "express";
import guestController from "../controller/guestController.mjs";

const guestRouter = express.Router();

guestRouter.post("/", guestController.getGuest);

export default guestRouter;
