import React from "react";
import "../styles/JobFilter.css";

const JobFilter = () => {
  return (
    <div className="job-filter">
      <select>
        <option value="">Select Category</option>
        <option value="IT">IT</option>
        <option value="Marketing">Marketing</option>
      </select>
      <input type="text" placeholder="Location" />
      <button>
        Filter <i className="fas fa-filter"></i>
      </button>
    </div>
  );
};

export default JobFilter;
