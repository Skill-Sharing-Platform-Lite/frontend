// src/App.js
import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import HomeSection from "./HomeSection";
import FeatureSection from "./FeatureSection";
import HowItWorksSection from "./HowItWorksSection";

const Home =()=> {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <main className="p-5 max-w-[94%] mx-auto">
        <HomeSection />
        <FeatureSection />
        <HowItWorksSection />
      </main>
    </div>
  );
}

export default Home;
