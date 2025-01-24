import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Dashboard from "../../pages/Dashbord";
import Users from "../../pages/Users";
import Reports from "../../pages/Reports";
import Metrics from "../../pages/Metrics";
import Settings from "../../pages/Settings";

const Index = () => {
  const [activeSection, setActiveSection] = useState("Dashboard");

  // Function to render the active section
  const renderSection = () => {
    switch (activeSection) {
      case "Dashboard":
        return <Dashboard />;
      case "Users":
        return <Users />;
      case "Reports":
        return <Reports />;
      case "Metrics":
        return <Metrics />;
      case "Settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className=" flex w-full min-h-screen bg-white">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">{renderSection()}</div>
      </div>
    </div>
  );
};

export default Index;
