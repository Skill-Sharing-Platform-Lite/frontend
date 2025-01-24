// src/components/HowItWorksSection.js
import React from "react";
import { Link } from "react-router-dom";

const HowItWorksSection = () => {
  // Define texts for the cards
  const cardData = [
    { linkText: "Sign Up", description: "Create a profile with your skills." },
    { linkText: "Find Matches", description: "Search and connect with peers." },
    { linkText: "Exchange Skills", description: "Chat and start collaborating." },
  ];

  return (
    <section id="how-it-works" className="my-20">
      <h2 className="text-5xl font-bold text-center mb-10">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        {cardData.map((card, index) => (
          <div key={index} className="bg-gray-100 p-5 rounded-xl">
            <h5 className="text-xl font-bold mb-6 bg-blue-600 text-white size-10 flex items-center justify-center rounded-full">
              {index + 1}
            </h5>
            <Link
              to="/signup"
              className="text-black text-xl font-bold hover:underline"
            >
              {card.linkText}
            </Link>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
