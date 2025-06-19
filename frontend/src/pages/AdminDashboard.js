import React from "react";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>
        <i className="fas fa-shield-alt"></i> Admin Dashboard
      </h2>
      <p>Manage users, jobs, and payments.</p>
    </div>
  );
};

export default AdminDashboard;
