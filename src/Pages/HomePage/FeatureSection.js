
// src/components/FeatureSection.js
import React from "react";

const FeatureSection = () => {
  return (
    <div className="my-20 py-10 grid grid-cols-1 md:grid-cols-2 gap-4">
      <Item
        icon={
          <svg
            width="65"
            height="50"
            viewBox="0 0 65 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.6018 32.167C40.2838 32.167 43.2685 34.8532 43.2685 38.167C43.2685 41.4808 40.2838 44.167 36.6018 44.167C32.9198 44.167 29.9352 41.4808 29.9352 38.167C29.9352 34.8532 32.9198 32.167 36.6018 32.167ZM14.3796 24.167C19.2888 24.167 23.2685 27.7488 23.2685 32.167C23.2685 36.5852 19.2888 40.167 14.3796 40.167C9.47041 40.167 5.49072 36.5852 5.49072 32.167C5.49072 27.7488 9.47041 24.167 14.3796 24.167ZM36.6018 36.167C35.3745 36.167 34.3796 37.0624 34.3796 38.167C34.3796 39.2716 35.3745 40.167 36.6018 40.167C37.8292 40.167 38.8241 39.2716 38.8241 38.167C38.8241 37.0624 37.8292 36.167 36.6018 36.167ZM14.3796 28.167C11.925 28.167 9.93517 29.9578 9.93517 32.167C9.93517 34.3762 11.925 36.167 14.3796 36.167C16.8342 36.167 18.8241 34.3762 18.8241 32.167C18.8241 29.9578 16.8342 28.167 14.3796 28.167ZM33.2685 4.16699C40.0187 4.16699 45.4907 9.09185 45.4907 15.167C45.4907 21.2422 40.0187 26.167 33.2685 26.167C26.5183 26.167 21.0463 21.2422 21.0463 15.167C21.0463 9.09185 26.5183 4.16699 33.2685 4.16699ZM33.2685 8.16699C28.9729 8.16699 25.4907 11.301 25.4907 15.167C25.4907 19.033 28.9729 22.167 33.2685 22.167C37.5641 22.167 41.0463 19.033 41.0463 15.167C41.0463 11.301 37.5641 8.16699 33.2685 8.16699Z"
              fill="#0013E7"
            />
          </svg>
        }
        title="Find Skill Matches"
        description="Easily connect with peers offering or requesting the skills you need."
      />
      <Item
        icon={
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6668 5H23.3335C30.6973 5 36.6668 10.9695 36.6668 18.3333C36.6668 25.6972 30.6973 31.6667 23.3335 31.6667V37.5C15.0002 34.1667 3.3335 29.1667 3.3335 18.3333C3.3335 10.9695 9.30303 5 16.6668 5ZM20.0002 28.3333H23.3335C28.8563 28.3333 33.3335 23.8562 33.3335 18.3333C33.3335 12.8105 28.8563 8.33333 23.3335 8.33333H16.6668C11.144 8.33333 6.66683 12.8105 6.66683 18.3333C6.66683 24.35 10.7703 28.276 20.0002 32.4663V28.3333Z"
              fill="#0013E7"
            />
          </svg>
        }
        title="Collaborate Seamlessly"
        description="Integrated messaging system for real-time communication."
      />
      <Item
        icon={
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.8333 12.5V16.6667H10.4167V39.5833H33.3333V29.1667H37.5V41.6667C37.5 42.8173 36.5673 43.75 35.4167 43.75H8.33333C7.18275 43.75 6.25 42.8173 6.25 41.6667V14.5833C6.25 13.4327 7.18275 12.5 8.33333 12.5H20.8333ZM43.75 6.25V22.9167H39.5833L39.5831 13.3604L23.3481 29.5981L20.4019 26.6519L36.6352 10.4167H27.0833V6.25H43.75Z"
              fill="#0013E7"
            />
          </svg>
        }
        title="Grow Your Network"
        description="Expand your connections and build valuable relationships."
      />
    </div>
  );
};

const Item = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-100 p-5 rounded-xl">
      <div className="mb-2 text-3xl">
        {typeof icon === "string" ? icon : <span>{icon}</span>}
      </div>
      <h4 className="font-bold text-2xl">{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default FeatureSection;
