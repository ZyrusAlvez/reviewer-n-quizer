import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose"
import reviewerRouter from "./routes/reviewerRoute.mjs";
import importRouter from "./routes/importRoute.mjs";
import userRouter from "./routes/userRoute.mjs";
import folderRouter from "./routes/folderRoute.mjs";
import guestRouter from "./routes/guestRoute.mjs";

dotenv.config();

const PORT = process.env.PORT
const DATABASE = process.env.DATABASE
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/reviewer", reviewerRouter)
app.use("/api/import", importRouter)
app.use("/api/user", userRouter)
app.use("/api/folder", folderRouter)
app.use("/api/guest", guestRouter)


mongoose
  .connect(DATABASE)
  .then(() => {
    console.log("connected to database")

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });

  })
  .catch((error) => {
    console.log("Database connection error:", error)
  })

