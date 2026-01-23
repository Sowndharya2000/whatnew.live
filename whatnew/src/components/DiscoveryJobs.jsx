import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Discovery.css";
import Header2 from "../components/Header2";

export default function Career() {
  // Backend URL
  const API_URL = process.env.REACT_APP_API_URL || "https://backend-0b3x.onrender.com";

  // Default jobs (fallback if backend fails)
  const defaultJobs = [
    { id: 1, title: "Frontend Developer", description: "React JS", location: "Remote", type: "Full-time", salary: "₹6-8 LPA" },
    { id: 2, title: "Backend Developer", description: "Node.js & MongoDB", location: "Bangalore", type: "Full-time", salary: "₹7-10 LPA" },
    { id: 3, title: "UI/UX Designer", description: "Figma & Adobe XD", location: "Chennai", type: "Part-time", salary: "₹3-5 LPA" },
    { id: 4, title: "DevOps Engineer", description: "AWS & CI/CD", location: "Remote", type: "Full-time", salary: "₹8-12 LPA" },
    { id: 5, title: "Product Manager", description: "Agile & Scrum", location: "Mumbai", type: "Full-time", salary: "₹12-15 LPA" },
    { id: 6, title: "QA Engineer", description: "Manual & Automation", location: "Remote", type: "Full-time", salary: "₹5-7 LPA" },
    { id: 7, title: "Marketing Specialist", description: "SEO & Social Media", location: "Delhi", type: "Part-time", salary: "₹4-6 LPA" },
    { id: 8, title: "Data Analyst", description: "Python & SQL", location: "Remote", type: "Full-time", salary: "₹6-9 LPA" },
    { id: 9, title: "Mobile Developer", description: "React Native / Flutter", location: "Hyderabad", type: "Full-time", salary: "₹7-11 LPA" },
    { id: 10, title: "Content Writer", description: "Technical & Creative", location: "Remote", type: "Part-time", salary: "₹3-5 LPA" },
  ];

  // States
  const [jobs, setJobs] = useState(defaultJobs); // show default jobs immediately
  const [selectedJob, setSelectedJob] = useState(null);
  const [resume, setResume] = useState(null);
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 3;

  // Fetch jobs from backend or fallback to defaultJobs
  useEffect(() => {
    axios
      .get(`${API_URL}/jobs`)
      .then(res => {
        if (res.data.length) setJobs(res.data);
      })
      .catch(() => console.warn("Backend offline — showing default jobs"));
  }, [API_URL]);

  // Apply to a job
  const handleApply = async (job) => {
    if (!resume) return alert("Please upload a resume!");
    if (!applicantName || !applicantEmail) return alert("Please enter your name and email!");

    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("name", applicantName);
    formData.append("email", applicantEmail);
    formData.append("jobId", job._id || job.id);

    try {
      await axios.post(`${API_URL}/apply`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert(`Applied to ${job.title} successfully!`);
      setSelectedJob(null);
      setResume(null);
      setApplicantName("");
      setApplicantEmail("");
    } catch (error) {
      alert("Application failed. Try again later.");
      console.error(error);
    }
  };

  // Delete a job
  const handleDeleteJob = (id) => {
    if (!window.confirm("Delete this job?")) return;
    axios
      .delete(`${API_URL}/jobs/${id}`)
      .then(() => axios.get(`${API_URL}/jobs`).then(res => setJobs(res.data)))
      .catch(() => alert("Backend offline — cannot delete job"));
  };

  // Pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  return (
    <div className="career-container">
      <Header2 />
      <h2 className="career-title">Job Listings</h2>

      {/* JOB LIST */}
      <div className="job-list">
        {currentJobs.map((job) => (
          <div className="job-card" key={job._id || job.id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.type}</p>
            <p><strong>Salary:</strong> {job.salary}</p>

            <button onClick={() => setSelectedJob(job)}>Apply Now</button>

            {job._id && (
              <button className="delete-btn" onClick={() => handleDeleteJob(job._id)}>Delete</button>
            )}
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? "active-page" : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* APPLY FORM */}
      {selectedJob && (
        <div className="apply-form">
          <h3>Apply for: {selectedJob.title}</h3>
          <p><strong>Salary:</strong> {selectedJob.salary}</p>

          <input type="text" placeholder="Your Name" value={applicantName} onChange={(e) => setApplicantName(e.target.value)} />
          <input type="email" placeholder="Your Email" value={applicantEmail} onChange={(e) => setApplicantEmail(e.target.value)} />
          <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setResume(e.target.files[0])} />

          <button onClick={() => handleApply(selectedJob)}>Submit Application</button>
          <button className="cancel-btn" onClick={() => setSelectedJob(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
}
