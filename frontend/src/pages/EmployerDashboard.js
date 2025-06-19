import React from "react";
import InterviewScheduler from "../components/InterviewScheduler";
import "../styles/EmployerDashboard.css";

const EmployerDashboard = () => {
  return (
    <div className="employer-dashboard">
      <h2>
        <i className="fas fa-building"></i> Employer Dashboard
      </h2>
      <p>Create profile and post jobs here.</p>
      <InterviewScheduler />
    </div>
  );
};

export default EmployerDashboard;