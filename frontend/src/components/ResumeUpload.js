import React from "react";
import "../styles/ResumeUpload.css";

const ResumeUpload = () => {
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) alert(`Uploaded: ${file.name}`);
    // Add API call to uploadResume here
  };

  return (
    <div className="resume-upload">
      <h3>
        <i className="fas fa-file-upload"></i> Upload Resume
      </h3>
      <input type="file" accept=".pdf,.doc,.docx" onChange={handleUpload} />
    </div>
  );
};

export default ResumeUpload;
