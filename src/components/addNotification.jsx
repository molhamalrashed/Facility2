import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AddNotification = () => {
  const currentProperty = JSON.parse(
    sessionStorage.getItem("selectedProperty")
  );
  const [notification, setNotification] = useState({
    notificationType: "",
    message: "",
    notificationDate: "",
    status: "",
    assignedTo: "",
    priority: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNotification({
      ...notification,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const usersData = JSON.parse(localStorage.getItem("usersData")) || [];

    // Find the user and property by currentPropertyId
    usersData.forEach((user) => {
      user.properties.forEach((property) => {
        if (property.propertyId === currentProperty.propertyId) {
          property.notifications.push(notification);
        }
      });
    });

    // Update the property notifications stored in session storage
    const updatedProperty = { ...currentProperty };
    updatedProperty.notifications = [
      ...updatedProperty.notifications,
      notification,
    ];
    sessionStorage.setItem("selectedProperty", JSON.stringify(updatedProperty));

    // Save the updated data back to local storage
    localStorage.setItem("usersData", JSON.stringify(usersData));

    // Reset the form
    setNotification({
      notificationType: "",
      message: "",
      notificationDate: "",
      status: "",
      assignedTo: "",
      priority: "",
    });

    alert("Notification added successfully!");
    window.history.back();
  };

  const handleCancel = () => {
    window.history.back();
  };

  return (
    <div className="container">
      <h2>Add New Notification</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Notification Type</label>
          <input
            type="text"
            className="form-control"
            name="notificationType"
            value={notification.notificationType}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <input
            type="text"
            className="form-control"
            name="message"
            value={notification.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Notification Date</label>
          <input
            type="datetime-local"
            className="form-control"
            name="notificationDate"
            value={notification.notificationDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            className="form-select"
            name="status"
            value={notification.status}
            onChange={handleChange}
            required
          >
            <option value="">Select status</option>
            <option value="pending">Pending</option>
            <option value="scheduled">Scheduled</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Assigned To</label>
          <input
            type="text"
            className="form-control"
            name="assignedTo"
            value={notification.assignedTo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Priority</label>
          <select
            className="form-select"
            name="priority"
            value={notification.priority}
            onChange={handleChange}
            required
          >
            <option value="">Select priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Notification
        </button>
        <button
          type="button"
          className="btn btn-secondary ml-2"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddNotification;
