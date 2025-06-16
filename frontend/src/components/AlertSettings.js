import React from "react";
import "../styles/AlertSettings.css";

const AlertSettings = () => {
  return (
    <div className="alert-settings">
      <h3>
        <i className="fas fa-bell"></i> Set Job Alerts
      </h3>
      <label>
        <input type="checkbox" /> Email
      </label>
      <label>
        <input type="checkbox" /> SMS
      </label>
      <button>
        Save <i className="fas fa-save"></i>
      </button>
    </div>
  );
};

export default AlertSettings;
