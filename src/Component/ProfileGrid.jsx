import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import axios from "axios";

const ProfileGrid = ({ currentUserId }) => {
  const [profiles, setProfiles] = useState([]);

  // Fetch users from the backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users")
      .then((response) => {
        setProfiles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {profiles.map((profile) => (
        <ProfileCard
          key={profile._id}
          id={profile._id}
          name={profile.name}
          description={profile.skills.join(", ")}
          imageUrl={profile.avatar || "https://via.placeholder.com/150"}
          currentUserId={currentUserId}
        />
      ))}
    </div>
  );
};

export default ProfileGrid;