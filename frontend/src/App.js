import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import JobSeekerDashboard from "./pages/JobSeekerDashboard";
import EmployerDashboard from "./pages/EmployerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Notification from "./components/Notification";
import { fetchJobs } from "./api";
import "./App.css";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New job posted!" },
  ]);

  useEffect(() => {
    fetchJobs()
      .then((response) => setJobs(response.data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  const removeNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <Notification messages={notifications} onClose={removeNotification} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/job-seeker"
          element={<JobSeekerDashboard jobs={jobs} />}
        />
        <Route path="/employer" element={<EmployerDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
