import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config()

const app = express();
const PORT = process.env.PORT;


app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
