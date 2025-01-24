import React from "react";
import { FaSearch } from "react-icons/fa";
import image from "../assets/images.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-16 p-6 ">
      <div className=" flex items-center bg-gray-300 rounded">
        <FaSearch className="text-black ml-5" />
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 border-none text-black  focus:outline-none"
        />
      </div>
      <Link to="/profile" className="text-black">
        <div className="flex items-center space-x-4 cursor-pointer">
          <img
            src={image}
            alt="Admin Avatar"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-bold text-black">Jhon Novel</p>
            <p className="text-sm text-gray-500">Admin</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
