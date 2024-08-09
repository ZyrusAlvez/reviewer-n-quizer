import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import reviewerRouter from "./routes/reviewerRoute.mjs";

dotenv.config();

const PORT = process.env.PORT
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/reviewer", reviewerRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
