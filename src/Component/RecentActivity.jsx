import React from "react";
import ActivityItem from "./ActivityItem";
import image from "../assets/images.jpeg";
import image1 from "../assets/images (1).jpeg";
import image2 from "../assets/images (2).jpeg";
const RecentActivity = () => {
  const activities = [
    {
      name: "John Novel",
      action: "registered",
      time: "10 minutes ago",
      images: image,
    },
    {
      name: "Olivia Harper",
      action: "registered",
      time: "1 day ago",
      images: image1,
    },
    {
      name: "Sophia Bennett",
      action: "registered",
      time: "10 days ago",
      images: image2,
    },
    {
      name: "Liam Anderson",
      action: "registered",
      time: "1 week ago",
      images: image,
    },
  ];

  return (
    <div className="col-span-4 bg-gray-200 text-black p-6 rounded-lg shadow-lg">
      <h2 className="text-xl  mb-4">Recent Activity Feed</h2>
      <div className="space-y-4">
        {activities.map((activity, idx) => (
          <ActivityItem
            key={idx}
            name={activity.name}
            action={activity.action}
            time={activity.time}
            images={activity.images}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
