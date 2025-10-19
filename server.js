import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import casesRouter from "./routes/cases.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// API route
app.use("/api/cases", casesRouter);

// root
app.get("/", (req, res) => res.send("Legal Case & Document Management API running"));

// connect and start
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });
