import React from "react";
import "../styles/JobCard.css";

const JobCard = ({ title, company, location, salary, onApply }) => {
  return (
    <div className="job-card">
      <h3>
        <i className="fas fa-suitcase"></i> {title}
      </h3>
      <p>
        {company} - {location}
      </p>
      <p>Salary: ${salary}</p>
      <button onClick={onApply}>
        Apply <i className="fas fa-paper-plane"></i>
      </button>
    </div>
  );
};

export default JobCard;
