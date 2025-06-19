import React from "react";
import "../styles/JobCard.css";

const JobCard = ({ title, company, location, salary, onApply }) => {
  return (
    <div className="job-card">
      <h3>
        <i className="fas fa-suitcase"></i> {title}{" "}
        <i className="fas fa-star"></i>
      </h3>
      <p>
        <i className="fas fa-building"></i> {company} - {location}
      </p>
      <p>
        <i className="fas fa-money-bill-wave"></i> Salary: ${salary}
      </p>
      <button onClick={onApply}>
        Apply <i className="fas fa-paper-plane"></i>
      </button>
    </div>
  );
};

export default JobCard;
