import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import img1 from "../assets/sampleuser (1).jpg";
import img2 from "../assets/sampleuser (2).jpg";

function Profile() {
  const [user, setUser] = useState(null); // State for the logged-in user
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch logged-in user data (replace with your API call or auth context)
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/user"); // Example API endpoint
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          // Redirect to login if not authenticated
          navigate("/login");
        }
      } catch (error) {
        console.error("Failed to fetch user", error);
        navigate("/login");
      }
    };

    fetchUser();
  }, [navigate]);

  // Redirect to login if user is not fetched yet
  if (!user) return null;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <svg
          width="49.04"
          height="49"
          viewBox="0 0 50 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.4866 26.5417L14.9771 26.5435C14.135 28.9214 11.865 30.625 9.19671 30.625C5.81129 30.625 3.06689 27.8828 3.06689 24.5C3.06689 21.1172 5.81129 18.375 9.19671 18.375C11.8657 18.375 14.1363 20.0795 14.9778 22.4585L19.4866 22.4583L26.5645 10.2083L33.0429 10.2085C33.8846 7.82949 36.155 6.125 38.8242 6.125C42.2095 6.125 44.954 8.86726 44.954 12.25C44.954 15.6327 42.2095 18.375 38.8242 18.375C36.1559 18.375 33.8858 16.6715 33.0438 14.2935L28.9225 14.2917L23.0256 24.498L28.9245 34.7083L33.0429 34.7085C33.8846 32.3296 36.155 30.625 38.8242 30.625C42.2095 30.625 44.954 33.3672 44.954 36.75C44.954 40.1328 42.2095 42.875 38.8242 42.875C36.1559 42.875 33.8858 41.1714 33.0438 38.7935L26.5645 38.7917L19.4866 26.5417ZM38.8242 34.7083C37.6957 34.7083 36.7809 35.6224 36.7809 36.75C36.7809 37.8776 37.6957 38.7917 38.8242 38.7917C39.9527 38.7917 40.8674 37.8776 40.8674 36.75C40.8674 35.6224 39.9527 34.7083 38.8242 34.7083ZM9.19671 22.4583C8.06823 22.4583 7.15344 23.3724 7.15344 24.5C7.15344 25.6276 8.06823 26.5417 9.19671 26.5417C10.3252 26.5417 11.24 25.6276 11.24 24.5C11.24 23.3724 10.3252 22.4583 9.19671 22.4583ZM38.8242 10.2083C37.6957 10.2083 36.7809 11.1224 36.7809 12.25C36.7809 13.3776 37.6957 14.2917 38.8242 14.2917C39.9527 14.2917 40.8674 13.3776 40.8674 12.25C40.8674 11.1224 39.9527 10.2083 38.8242 10.2083Z"
            fill="black"
          />
        </svg>
        <button className="logout-btn">LOGOUT</button>
      </div>
      <div className="profile-images">
        <img className="banner-img" src={img2} alt="Banner" />
        <div className="user-part2">
          <img className="user-img" src={img1} alt="User" />
          <button className="edit-btn">edit profile</button>
        </div>
      </div>
      <div className="user-info">
        <h1 style={{ fontWeight: 500, fontSize: "4rem" }}>
          {user.name || "John Doe"}
        </h1>
        <div className="connection">
          {user.connections || 0} <br /> Connections
        </div>
        <p>{user.bio || "No bio available."}</p>
        {/* Add additional dynamic user data here */}
        <p style={{ margin: "1rem" }}>
          © 2025 Skill Sharing Platform. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Profile;
