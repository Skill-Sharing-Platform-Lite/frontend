// components/FriendRequestNotifications.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const FriendRequestNotifications = ({ userId }) => {
  const [requests, setRequests] = useState([]);

  // Fetch pending friend requests
  useEffect(() => {
    if (userId) {
      axios
        .get(`http://localhost:5000/api/friendRequest/pending/${userId}`)
        .then((response) => {
          setRequests(response.data);
        })
        .catch((error) => {
          console.error("Error fetching friend requests:", error);
        });
    }
  }, [userId]);

  const handleAccept = async (requestId) => {
    try {
      await axios.post("http://localhost:5000/api/friendRequest/accept", {
        requestId,
      });
      setRequests((prev) => prev.filter((req) => req._id !== requestId));
    } catch (error) {
      console.error("Error accepting friend request:", error);
    }
  };

  const handleReject = async (requestId) => {
    try {
      await axios.post("http://localhost:5000/api/friendRequest/reject", {
        requestId,
      });
      setRequests((prev) => prev.filter((req) => req._id !== requestId));
    } catch (error) {
      console.error("Error rejecting friend request:", error);
    }
  };

  return (
    <div className="friend-requests">
      <h3>Friend Requests</h3>
      {requests.map((request) => (
        <div key={request._id} className="request">
          <p>{request.sender.name} wants to connect with you.</p>
          <button onClick={() => handleAccept(request._id)}>Accept</button>
          <button onClick={() => handleReject(request._id)}>Reject</button>
        </div>
      ))}
    </div>
  );
};

export default FriendRequestNotifications;