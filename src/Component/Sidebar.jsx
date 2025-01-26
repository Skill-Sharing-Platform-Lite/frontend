import React, { useState } from "react";
import { FaHome, FaUsers, FaChartBar, FaCog } from "react-icons/fa";
// import { FaChartLine } from "react-icons/fa6";
import logo from "../assets/images.svg";

const Sidebar = ({ setActiveSection }) => {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { icon: <FaHome />, label: "Dashboard" },
    { icon: <FaUsers />, label: "Users" },
    { icon: <FaChartBar />, label: "Reports" },
    { icon: <FaChartLine />, label: "Metrics" },
    { icon: <FaCog />, label: "Settings" },
  ];

  const handleClick = (section) => {
    setActive(section);
    setActiveSection(section); // Update the active section in the parent
  };

  return (
    <div className="w-60 bg-white flex flex-col items-center py-4 space-y-7">
      <img src={logo} alt="Website Logo" className="w-10 h-10 rounded-full" />
      <ul className="space-y-4">
        {menuItems.map((item, idx) => (
          <li
            key={idx}
            className={`flex items-center space-x-3 p-2 text-black rounded-sm bg-gray-200 cursor-pointer hover:bg-green-600 ${
              active === item.label && "bg-green-600 font-bold"
            }`}
            onClick={() => handleClick(item.label)}
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
