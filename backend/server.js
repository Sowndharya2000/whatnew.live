import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import path from "path";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---------------- MongoDB Atlas ----------------
const MONGO_URI =
  "mongodb+srv://vsowndharya2000_db_user:PDUJ5GD59QAgUHQB@cluster0.tua5tj5.mongodb.net/jobPortal?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("MongoDB Connected"));

// ---------------- Ensure uploads folder exists ----------------
const UPLOADS_FOLDER = path.join(process.cwd(), "uploads");
if (!fs.existsSync(UPLOADS_FOLDER)) fs.mkdirSync(UPLOADS_FOLDER);

// ---------------- Multer setup ----------------
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOADS_FOLDER);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

// ---------------- Schemas ----------------
const JobSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  type: String,
  salary: String,
});
const Job = mongoose.model("Job", JobSchema);

const ApplicationSchema = new mongoose.Schema({
  jobId: String,
  name: String,
  email: String,
  resumePath: String,
  appliedAt: { type: Date, default: Date.now },
});
const Application = mongoose.model("Application", ApplicationSchema);

// ---------------- View Engine ----------------
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

// ---------------- Routes ----------------

// Root route
app.get("/", (req, res) => {
  res.send("Backend server is running 🚀");
});

// Get all jobs
app.get("/jobs", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// Add job
app.post("/jobs", async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.json({ message: "Job added" });
});

// Apply to job
app.post("/apply", upload.single("resume"), async (req, res) => {
  const { name, email, jobId } = req.body;
  const resumePath = req.file.originalname;
  const application = new Application({ name, email, jobId, resumePath });
  await application.save();
  res.json({ message: "Application submitted successfully" });
});

// Serve uploaded files
app.use("/uploads", express.static(UPLOADS_FOLDER));

// ---------------- Admin Dashboard ----------------
app.get("/admin", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    const applications = await Application.find().sort({ appliedAt: -1 });

    res.render("adminDashboard", {
      stats: {
        totalApplications: applications.length,
      },
      jobs,
      applications,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Admin Dashboard Error");
  }
});

// ---------------- Start Server ----------------
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
