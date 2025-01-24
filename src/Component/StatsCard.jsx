import React from "react";

const StatsCard = ({ title, value, description }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow flex flex-col justify-between text-black">
      <h3 className="font-thin text-lg">{title}</h3>
      <p className="text-3xl font-semibold mt-2">{value}</p>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
    </div>
  );
};

export default StatsCard;
