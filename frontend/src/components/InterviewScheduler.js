import React, { useState } from "react";
import "../styles/InterviewScheduler.css";

const InterviewScheduler = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSchedule = (e) => {
    e.preventDefault();
    if (date && time) alert(`Interview scheduled for ${date} at ${time}`);
    // Add API call to schedule interview here
  };

  return (
    <div className="interview-scheduler">
      <h3>
        <i className="fas fa-calendar-alt"></i> Schedule Interview
      </h3>
      <form onSubmit={handleSchedule}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <button type="submit">
          Schedule <i className="fas fa-check"></i>
        </button>
      </form>
    </div>
  );
};

export default InterviewScheduler;