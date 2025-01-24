import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const ProfileCard = ({ id, name, description, imageUrl, currentUserId }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [buttonText, setButtonText] = useState("Connect");

  const handleConnect = async () => {
    try {
      // Send a friend request to the backend
      const response = await axios.post("http://localhost:5000/api/friendRequest/send", {
        senderId: currentUserId, // ID of the current user (logged-in user)
        receiverId: id, // ID of the profile being viewed
      });

      if (response.data) {
        // Update the button text and disable it
        setButtonText("Request Sent");
        setIsConnected(true);
      }
    } catch (error) {
      console.error("Error sending friend request:", error);
      alert("Failed to send friend request. Please try again.");
    }
  };

  return (
    <div
      className="card border-0 shadow-sm p-4"
      style={{ borderRadius: "12px", width: "22rem" }}
    >
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        {/* Profile Image and Name */}
        <div className="d-flex align-items-center">
          <img
            src={imageUrl || "https://via.placeholder.com/60"}
            alt={`Profile of ${name}`}
            className="rounded-circle me-3"
            style={{ width: "60px", height: "60px", objectFit: "cover" }}
          />
          <div>
            <h5 className="mb-0">{name || "User Name"}</h5>
            <a href="#" className="text-primary text-decoration-none">
              view profile
            </a>
          </div>
        </div>

        {/* Connect Button */}
        <button
          className={`btn btn-sm px-3 rounded-pill ${
            isConnected ? "btn-success" : "btn-primary"
          }`}
          onClick={handleConnect}
          disabled={isConnected}
        >
          {buttonText}
        </button>
      </div>

      {/* Description */}
      <p className="text-muted mb-4">
        {description || "No description available."}
      </p>

      {/* Skills Offered */}
      <div className="mb-3">
        <h6 className="text-uppercase text-muted mb-2">Skills Offered</h6>
        <div>
          <a href="#" className="text-success me-3 text-decoration-none">
            ui/ux design
          </a>
          <a href="#" className="text-success me-3 text-decoration-none">
            responsive web design
          </a>
          <a href="#" className="text-success text-decoration-none">
            graphic design
          </a>
        </div>
      </div>

      {/* Skills Requested */}
      <div>
        <h6 className="text-uppercase text-muted mb-2">Skills Requested</h6>
        <div>
          <a href="#" className="text-primary me-3 text-decoration-none">
            version control
          </a>
          <a href="#" className="text-primary text-decoration-none">
            search engine optimization
          </a>
        </div>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  id: PropTypes.string.isRequired, // ID of the profile being viewed
  name: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  currentUserId: PropTypes.string.isRequired, // ID of the logged-in user
};

export default ProfileCard;