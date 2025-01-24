import React from "react";
import PlatformInsights from "../components/PlatformInsights";

const Metrics = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Metrics</h1>
      <p className="text-gray-600">Analyze platform metrics here.</p>
      <PlatformInsights />
    </div>
  );
};

export default Metrics;
