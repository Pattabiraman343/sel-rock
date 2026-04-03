import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import leadRoutes from "./routes/leadRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();

// ✅ Proper CORS setup (ENOUGH — no options needed)
app.use(cors({
  origin: "*", // ✅ allow all (for now)
  methods: ["GET", "POST", "PATCH", "DELETE"],
}));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});
app.use("/api/leads", leadRoutes);

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});