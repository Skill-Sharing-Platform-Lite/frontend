import React from "react";
import Header from "../Component/Header";
import StatsCard from "../Component/StatsCard";
import RecentActivity from "../Component/RecentActivity";
import PlatformInsights from "../Component/PlatformInsights";
const Dashboard = () => {
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
    <div className="flex-1 p-6 space-y-6">
      <Header />
      <div className="grid grid-cols-1 sm:gird-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
        {stats.map((stat, idx) => (
          <StatsCard
            key={idx}
            title={stat.title}
            value={stat.value}
            description={stat.description}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 ">
        <PlatformInsights />
        <RecentActivity />
      </div>
    </div>
  );
};

export default Dashboard;
