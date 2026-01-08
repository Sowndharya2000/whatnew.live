import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import path from "path";
import fs from "fs";

const app = express();

/* ================= MIDDLEWARE ================= */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ================= VIEW ENGINE ================= */
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

/* ================= STATIC FILES ================= */
/* Public = CSS, JS, Fonts (NOT resumes) */
app.use(express.static(path.join(process.cwd(), "public")));

/* ================= MONGODB ================= */
const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://vsowndharya2000_db_user:PDUJ5GD59QAgUHQB@cluster0.tua5tj5.mongodb.net/jobPortal?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => {
    console.error("❌ MongoDB Error:", err);
    process.exit(1);
  });

/* ================= UPLOADS (RESUMES ONLY) ================= */
const UPLOADS_FOLDER = path.join(process.cwd(), "uploads");

if (!fs.existsSync(UPLOADS_FOLDER)) {
  fs.mkdirSync(UPLOADS_FOLDER, { recursive: true });
}

/* Serve resumes */
app.use("/uploads", express.static(UPLOADS_FOLDER));

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOADS_FOLDER),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

/* ================= SCHEMAS ================= */
const JobSchema = new mongoose.Schema(
  {
    title: String,
    location: String,
    type: String,
    salary: String,
  },
  { timestamps: true }
);

const ApplicationSchema = new mongoose.Schema({
  jobId: String,
  name: String,
  email: String,
  resumePath: String,
  appliedAt: { type: Date, default: Date.now },
});

const Job = mongoose.model("Job", JobSchema);
const Application = mongoose.model("Application", ApplicationSchema);

/* ================= ROUTES ================= */
app.get("/", (req, res) => {
  res.send("Backend server is running 🚀");
});

/* ===== ADMIN DASHBOARD ===== */
app.get("/admin", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    const applications = await Application.find().sort({ appliedAt: -1 });

    res.render("adminDashboard", {
      jobs,
      applications,
      stats: {
        totalJobs: jobs.length,
        totalApplications: applications.length,
      },
    });
  } catch (err) {
    console.error("Admin Error:", err);
    res.status(500).send("Admin Dashboard Error");
  }
});

/* ===== APPLY JOB ===== */
app.post("/apply", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Resume is required" });
    }

    const application = new Application({
      jobId: req.body.jobId,
      name: req.body.name,
      email: req.body.email,
      resumePath: req.file.filename, // ✅ correct
    });

    await application.save();

    res.status(201).json({
      message: "Application submitted successfully",
    });
  } catch (err) {
    console.error("Apply Error:", err);
    res.status(500).json({ message: "Application failed" });
  }
});

/* ================= SERVER ================= */
const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));


const BlogSchema = new mongoose.Schema({
  category: String,
  title: String,
  description: String,
  image: String,
  publishedAt: Date,
}, { timestamps: true });



const Blog = mongoose.model("Blog", BlogSchema);

app.get("/api/blogs", async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const blogs = await Blog.find(filter).sort({ publishedAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
});
app.get("/seed-blogs", async (req, res) => {
  const tabsData = [
    {
      id: 1,
      name: 'Latest',
      items: [
        { title: 'Product, Latest 7/8/25', description: 'Product Spotlight: Weekly Order Reports, Seller Hub Home, and Improvements to Order & Shipment Search.', image: 'assets/01.jpg' },
        { title: 'Community, Latest, and Whatnew 6/27/25', description: 'How a Pop Mart Toy Became a Household Name: The Rise of Labubu.', image: 'assets/02.png' },
        { title: 'Community, Latest, and Whatnew 6/12/25', description: 'Where High Fashion Meets High Engagement: Selling Luxury on Whatnew.', image:'assets/03.png' },
        { title: 'Product, Latest 5/15/25', description: 'A Refreshed Look for Whatnew.', image: 'assets/04.png' },
        { title: 'Community, Latest 5/7/25', description: 'Why Golf on Whatnew May Be Your Next Big Opportunity.', image: 'assets/05.png' },
        { title: 'Community, Latest, and Whatnew 5/1/25', description: 'WhatnewCon Returns - The Worlds Largest Virtual Comic Con.', image: 'assets/06.jpeg' },
        { title: 'Community, Latest 4/16/25', description: 'Adudehits Becomes First Woman-Owned Business to Hit 1M in Weekly Sales on Whatnew.', image:'assets/07.jpg' },
        { title: 'Product, and Whatnew, Latest, Community 3/27/25', description: 'Europes Live Selling Revolution: Whatnews 2025 Market Report.', image: 'assets/08.jpg' },
        { title: 'Community, Latest, and Whatnew 2/14/25', description: 'Whatnew Celebrates Black-Owned Businesses', image: 'assets/10.png' },
      ]
    },
    {
      id: 2,
      name: 'Community',
      items: [
        { title: 'Community, Latest 1/15/25', description: 'From Seller to Whatnew Employee — Join Us!.', image: 'assets/16.png' },
        { title: 'Community, Latest, and Whatnew 6/27/25', description: 'How a Pop Mart Toy Became a Household Name: The Rise of Labubu.', image: 'assets/02.png' },
        { title: 'Community, Latest, and Whatnew 6/12/25', description: 'Where High Fashion Meets High Engagement: Selling Luxury on Whatnew.', image:'assets/03.png' },
        { title: 'Product, Latest 5/15/25', description: 'A Refreshed Look for Whatnew.', image: 'assets/04.png' },
        { title: 'Community, Latest 5/7/25', description: 'Why Golf on Whatnew May Be Your Next Big Opportunity.', image: 'assets/05.png' },
        { title: 'Community, Latest, and Whatnew 5/1/25', description: 'WhatnewCon Returns - The Worlds Largest Virtual Comic Con.', image: 'assets/06.jpeg' },
        { title: 'Community, Latest 4/16/25', description: 'Adudehits Becomes First Woman-Owned Business to Hit 1M in Weekly Sales on Whatnew.', image:'assets/07.jpg' },
        { title: 'Community, Latest, and Whatnew 11/1/24', description: 'Holiday Tips from Sellers.', image: 'assets/14.png' },
        { title: 'Community, Latest, and Whatnew 2/14/25', description: 'Whatnew Celebrates Black-Owned Businesses.', image: 'assets/10.png' },
      ]
    },
    {
      id: 3,
      name: 'Product',
      items: [
        { title: 'Product, Latest 7/8/25', description: 'Product Spotlight: Weekly Order Reports, Seller Hub Home, and Improvements to Order & Shipment Search.', image: 'assets/01.jpg' },
        { title: 'Community, Latest, and Whatnew 6/27/25', description: 'How a Pop Mart Toy Became a Household Name: The Rise of Labubu.', image: 'assets/02.png' },
        { title: 'Community, Latest, and Whatnew 6/12/25', description: 'Where High Fashion Meets High Engagement: Selling Luxury on Whatnew.', image:'assets/03.png' },
        { title: 'Product, Latest 5/15/25', description: 'A Refreshed Look for Whatnew.', image: 'assets/04.png' },
        { title: 'Community, Latest 5/7/25', description: 'Why Golf on Whatnew May Be Your Next Big Opportunity.', image: 'assets/05.png' },
        { title: 'Community, Latest, and Whatnew 5/1/25', description: 'WhatnewCon Returns - The Worlds Largest Virtual Comic Con.', image: 'assets/06.jpeg' },
        { title: 'Community, Latest 4/16/25', description: 'Adudehits Becomes First Woman-Owned Business to Hit 1M in Weekly Sales on Whatnew.', image:'assets/07.jpg' },
        { title: 'Product, and Whatnew, Latest, Community 3/27/25', description: 'Europes Live Selling Revolution: Whatnews 2025 Market Report.', image: 'assets/08.jpg' },
        { title: 'Community, Latest, and Whatnew 11/1/24', description: 'Holiday Tips from Sellers.', image: 'assets/14.png' },
        { title: 'Community, Latest, and Whatnew 2/14/25', description: 'Whatnew Celebrates Black-Owned Businesses.', image: 'assets/10.png' },
      ]
    },
    {
      id: 4,
      name: 'Trust And Safety',
      items: [
        { title: 'Trust and Safety, Latest 9/18/24', description: 'Our Easier-to-Read -and-Understand Policies.', image: 'assets/18.png' },
        { title: 'Trust and Safety, Latest 8/21/24', description: 'How We Think About Harassment on Whatnew (with New Policy Updates).', image: 'assets/18.png' },
        { title: 'Trust and Safety, Latest 4/18/24', description: 'Our Ongoing Work: Tackling Scams on Whatnew.', image:'assets/18.png' },
        { title: 'Community, Product, Trust and Safety, and Whatnew, Latest 1/25/24', description: 'What’s up on Whatnew: A letter from our CEO.', image: 'assets/19.jpg' },
        { title: 'Trust and Safety, Latest 8/10/23', description: 'Whatnew’s Head of Sports on Policy, Growth, and Future Plans.', image: 'assets/21.jpg' },
        { title: 'Trust and Safety, Latest 6/23/23', description: 'Introducing Trust and Safety Metrics for Sellers.', image: 'assets/18.png' },
      ]
    },
    {
      id: 5,
      name: 'And Whatnew',
      items: [
        { title: 'Community, Latest, and Whatnew 6/27/25', description: 'How a Pop Mart Toy Became a Household Name: The Rise of Labubu.', image: 'assets/02.png' },
        { title: 'Community, Latest, and Whatnew 6/12/25', description: 'Where High Fashion Meets High Engagement: Selling Luxury on Whatnew.', image:'assets/03.png' },
        { title: 'Product, Latest 5/15/25', description: 'A Refreshed Look for Whatnew.', image: 'assets/04.png' },
        { title: 'Community, Latest 5/7/25', description: 'Why Golf on Whatnew May Be Your Next Big Opportunity.', image: 'assets/05.png' },
        { title: 'Community, Latest, and Whatnew 5/1/25', description: 'WhatnewCon Returns - The Worlds Largest Virtual Comic Con.', image: 'assets/06.jpeg' },
        { title: 'Community, Latest 4/16/25', description: 'Adudehits Becomes First Woman-Owned Business to Hit 1M in Weekly Sales on Whatnew.', image:'assets/07.jpg' },
        { title: 'Product, and Whatnew, Latest, Community 3/27/25', description: 'Europes Live Selling Revolution: Whatnews 2025 Market Report.', image: 'assets/08.jpg' },
        { title: 'Community, Latest, and Whatnew 11/1/24', description: 'Holiday Tips from Sellers.', image: 'assets/14.png' },
        { title: 'Community, Latest, and Whatnew 2/14/25', description: 'Whatnew Celebrates Black-Owned Businesses.', image: 'assets/10.png' },
      ]
    },
  ];

  try {
    await Blog.deleteMany({}); // clear old data
    await Blog.insertMany(tabsData); // insert new blogs
    res.send("Blogs seeded to database!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error seeding blogs.");
  }
});

app.get("/seed-blogs", async (req, res) => {
  const tabsData = [ /* your current array */ ];

  try {
    await Blog.deleteMany({}); // clear old data

    const blogsToInsert = [];

    tabsData.forEach(tab => {
      tab.items.forEach(item => {
        blogsToInsert.push({
          category: tab.name,
          title: item.title,
          description: item.description,
          image: item.image,
          publishedAt: new Date(), // or some specific date if you want
        });
      });
    });

    await Blog.insertMany(blogsToInsert); // insert flattened data
    res.send("Blogs seeded to database!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error seeding blogs.");
  }
});
