import React from "react";
import StatsCard from "./StatsCard";

const Header = () => {
  const stats = [
    {
      title: "Total Users",
      value: "12,345",
      description: "Registered users on the platform.",
    },
    {
      title: "Active Matches",
      value: "432",
      description: "Users actively connected.",
    },
    {
      title: "Reports Pending",
      value: "24",
      description: "Reports needing action.",
    },
    {
      title: "Sign-Ups This Week",
      value: "23",
      description: "Users joined in the past 7 days.",
    },
  ];

  return (
    <div className="">
      <div>
        <h1 className="text-xl font-semibold text-black mb-4">
          Welcome, Jhon Novel
        </h1>
        <p className="text-black">
          Here’s An Overview Of The Platform’s Performance.
        </p>
      </div>
    </div>
  );
};

export default Header;
