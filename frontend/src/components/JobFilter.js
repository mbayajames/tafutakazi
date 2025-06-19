import React from "react";
import "../styles/JobFilter.css";

const JobFilter = () => {
  return (
    <div className="job-filter">
      <select>
        <option value="">
          <i className="fas fa-list"></i> Select Category
        </option>
        <option value="IT">
          <i className="fas fa-laptop-code"></i> IT
        </option>
        <option value="Marketing">
          <i className="fas fa-bullhorn"></i> Marketing
        </option>
      </select>
      <input
        type="text"
        placeholder="Location <i className='fas fa-map-marker-alt'></i>"
      />
      <button>
        Filter <i className="fas fa-filter"></i>
      </button>
    </div>
  );
};

export default JobFilter;
