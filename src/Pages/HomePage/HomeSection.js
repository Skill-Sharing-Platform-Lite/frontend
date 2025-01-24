// src/components/HomeSection.js
import React, { useState } from "react";
import { FaRightLong } from "react-icons/fa6"; // Import an icon for the input section
import HeroIcon from "../../assets/icons/hero.svg";

const HomeSection = () => {
  const [getStarted, setGetStarted] = useState("Get Started");

  const handleChange = (e) => {
    setGetStarted(e.target.value); // Update the "Get Started" text when the user types
  };

  return (
    <section id="home" className="">
      <section className="relative h-[500px] pl-24 flex flex-col md:flex-row md:items-center md:gap-24 justify-between items-start mb-10">
        <div className="flex flex-col gap-4 w-full max-w-[40rem]">
          <h2 className="text-5xl font-bold leading-[4rem]">
            Connect, Collaborate, and Grow Your Skills
          </h2>
          <p className="mt-2 text-2xl text-zinc-600">
            A platform for university students to exchange skills and connect
            with peers.
          </p>

          <div className="mt-14">
            <button className="border px-8 py-4 rounded-lg flex items-center gap-4 bg-[#00FF84]">
              <span className="text-black font-[600] text-lg">
                Get It Started
              </span>{" "}
              <FaRightLong />{" "}
            </button>
          </div>
        </div>

        <div className="flex-1 z-[-1] absolute right-[6rem] top-1/2 -translate-y-1/2">
          <img
            src={HeroIcon}
            className="w-[650px]"
            alt="People collaborating"
          />
        </div>
      </section>
    </section>
  );
};

export default HomeSection;
