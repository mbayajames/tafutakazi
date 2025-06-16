import React from "react";
import "../styles/Notification.css";

const Notification = ({ messages, onClose }) => {
  return (
    <div className="notification-container">
      {messages.map((msg) => (
        <div key={msg.id} className="notification">
          <i className="fas fa-bell"></i> {msg.message}
          <button onClick={() => onClose(msg.id)} className="close-btn">
            ×
          </button>
        </div>
      ))}
    </div>
  );
};

export default Notification;
