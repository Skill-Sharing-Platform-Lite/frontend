import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
    skillsShared: "",
    skillsLookingFor: "",
    profilePicture: null,
    skillFiles: null, // Added for skill files
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 10 * 1024 * 1024) {
      alert("File size must be less than 10MB.");
      return;
    }
    setFormData({
      ...formData,
      profilePicture: file,
    });
  };

  const handleSkillFilesChange = (e) => {
    setFormData({
      ...formData,
      skillFiles: e.target.files, // Store multiple files
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    // Create FormData object for file uploads
    const data = new FormData();
    data.append("firstname", formData.firstName);
    data.append("middlename", formData.middleName);
    data.append("email", formData.email);
    data.append("gender", formData.gender);
    data.append("password", formData.password);
    data.append("skillsShared", JSON.stringify(formData.skillsShared.split(",")));
    data.append("skillsLookingFor", JSON.stringify(formData.skillsLookingFor.split(",")));
    data.append("profilePicture", formData.profilePicture);
  
    // Append skill files if any
    if (formData.skillFiles) {
      for (let file of formData.skillFiles) {
        data.append("skillFiles", file);
      }
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        body: data,
      });
  
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || "Registration failed");
      }
  
      const result = await response.json();
      console.log("Registration successful:", result);
      alert("Registration successful!");
    } catch (error) {
      console.error("Error during registration:", error);
      alert(error.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col max-w-7xl mx-auto">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-6">
          <Link to="/" className="text-xl font-bold text-blue-600">
            Skill-Sharing Platform
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-8">
        {/* Wider White Container (Custom width) */}
        <div className="max-w-5xl mx-auto bg-white p-12 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center mb-6">Join The Skill-Sharing Platform</h1>
          <p className="text-center text-gray-600 mb-8">
            Create an account and start connecting with peers today!
          </p>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Full Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="middleName" className="block text-sm font-medium text-gray-700">
                  Middle Name
                </label>
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Email and Gender */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  University Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <div className="mt-1 space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender === "Male"}
                      onChange={handleChange}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">Male</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={handleChange}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">Female</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Password and Confirm Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            {/* Skills to Share and Skills Looking For */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="skillsShared" className="block text-sm font-medium text-gray-700">
                  What skills can you share?
                </label>
                <input
                  type="text"
                  id="skillsShared"
                  name="skillsShared"
                  value={formData.skillsShared}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., JavaScript, React, Node.js"
                />
              </div>
              <div>
                <label htmlFor="skillsLookingFor" className="block text-sm font-medium text-gray-700">
                  What skills are you looking to learn?
                </label>
                <input
                  type="text"
                  id="skillsLookingFor"
                  name="skillsLookingFor"
                  value={formData.skillsLookingFor}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., Python, Django, Machine Learning"
                />
              </div>
            </div>

            {/* Profile Picture and File Upload */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Profile Picture (Round) */}
              <div>
                <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">
                  Profile Picture
                </label>
                <div className="mt-1 flex justify-center items-center w-40 h-40 rounded-full border-2 border-gray-300 border-dashed bg-white overflow-hidden">
                  {formData.profilePicture ? (
                    <img
                      src={URL.createObjectURL(formData.profilePicture)}
                      alt="Profile Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <label
                      htmlFor="profilePicture"
                      className="cursor-pointer flex flex-col items-center justify-center w-full h-full"
                    >
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-xs text-gray-600">Upload</span>
                    </label>
                  )}
                  <input
                    id="profilePicture"
                    name="profilePicture"
                    type="file"
                    onChange={handleFileChange}
                    className="sr-only"
                  />
                </div>
              </div>

              {/* File Upload */}
              <div>
                <label htmlFor="skillFiles" className="block text-sm font-medium text-gray-700">
                  Upload Skill Files
                </label>
                <input
                  id="skillFiles"
                  name="skillFiles"
                  type="file"
                  multiple // Allow multiple files
                  onChange={handleSkillFilesChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default RegistrationPage;