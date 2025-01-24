import React from "react";

const ActivityItem = ({ name, action, time, images }) => {
  return (
    <div className="flex shrink-0 items-center space-x-4 bg-white p-2 rounded-sm">
      <img src={images} alt="User Avatar" className="w-12 h-12 rounded-full" />
      <div>
        <p className="font-bold">{name}</p>
        <p className="text-gray-600 text-sm">
          {action} <span className="text-gray-400">{time}</span>
        </p>
      </div>
    </div>
  );
};

export default ActivityItem;
