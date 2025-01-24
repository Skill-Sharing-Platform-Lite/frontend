import React from "react";
import image2 from "../assets/images (2).jpeg";
import profile from "../assets/profile.jpeg";

const ProfileCard = () => {
  return (
    <div className="relative bg-white min-h-screen ">
      <img
        src={profile} // Replace with the background image
        alt="background"
        className="w-full h-48 object-cover object-center"
      />
      <div className=" relative ">
        <div className="flex items-center justify-center absolute -top-10 left-36">
          <img
            src={image2}
            alt="profile"
            className="w-32 h-32 rounded-full border-4 border-white "
          />
          <button className=" bg-blue-500 text-white px-2 py-1 text-sm rounded hover:bg-blue-600 ">
            Edit Profile
          </button>
        </div>
      </div>
      <div className="mt-16 px-6  text-black flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">John Novel</h1>
        <p className="text-gray-600 w-56  ">
          I am a front-end web developer skilled in HTML, CSS, and JavaScript,
          passionate about creating engaging user experiences.
        </p>
      </div>
      <div className="px-6 mt-6 ">
        <h2 className="text-lg font-bold">Skills Offered</h2>
        <div className="flex flex-wrap gap-2 mt-2 justify-center">
          {["UI/UX Design", "Responsive Web Design", "Graphic Design"].map(
            (skill) => (
              <span
                key={skill}
                className="bg-green-100 text-green-600 px-3 py-1 rounded text-sm"
              >
                {skill}
              </span>
            )
          )}
        </div>
        <h2 className="text-lg font-bold mt-4">Skills Requested</h2>
        <div className="flex flex-wrap gap-2 mt-2 justify-center">
          {["Version Control", "Search Engine Optimization"].map((skill) => (
            <span
              key={skill}
              className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
