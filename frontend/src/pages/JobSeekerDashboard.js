import React from "react";
import JobCard from "../components/JobCard";
import ResumeUpload from "../components/ResumeUpload";
import JobFilter from "../components/JobFilter";
import AlertSettings from "../components/AlertSettings";
import "../styles/JobSeekerDashboard.css";

const JobSeekerDashboard = () => {
  const jobs = [
    {
      title: "Software Developer",
      company: "Tech Corp",
      location: "Nairobi",
      salary: 5000,
    },
    {
      title: "Marketing Manager",
      company: "Ad Agency",
      location: "Mombasa",
      salary: 4000,
    },
  ];

  return (
    <div className="job-seeker-dashboard">
      <h2>
        <i className="fas fa-user"></i> Job Seeker Dashboard
      </h2>
      <JobFilter />
      <div className="job-list">
        {jobs.map((job, i) => (
          <JobCard key={i} {...job} />
        ))}
      </div>
      <ResumeUpload />
      <AlertSettings />
    </div>
  );
};

export default JobSeekerDashboard;
