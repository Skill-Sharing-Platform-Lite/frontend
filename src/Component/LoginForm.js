import React, { useState } from "react";

import { Link } from "react-router-dom"; // Ensure Link is imported

import { Link, useNavigate } from "react-router-dom";


const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumbers &&
      hasSpecialChars
    );
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
  
    // Validate password
    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters long, and include uppercase letters, lowercase letters, numbers, and special characters."
      );
      setLoading(false);
      return;
    }
  
    try {
      // Log the request payload
      console.log("Sending login request with:", { email, password });
  
      // Send login request to the backend
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      // Log the response status and data
      console.log("Response status:", response.status);
      const data = await response.json();
      console.log("Response data:", data);
  
      if (response.ok) {
        // Save the token to local storage
        localStorage.setItem("token", data.token);
  
        // Call the onLogin callback (if provided)
        if (onLogin) onLogin(data.token);
  
        // Redirect to the matching page
        navigate("/matching");
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="bg-white rounded-xl px-8 pt-6 pb-8 mb-4 mx-auto w-full max-w-md"
    >
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full rounded-xl"
          required
        />
      </div>
      <div className="mb-4 relative">
        <label htmlFor="password" className="block text-gray-700">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 pl-10 w-full rounded-xl"
          required
        />
        {error && <p className="text-red-500 text-center mt-4 text-sm">{error}</p>}
        <div className="flex justify-between">
          <Link
            to="/forgot-password"
            className="text-blue-600 hover:underline text-sm ml-auto pt-2"
          >
            Forgot Password?
          </Link>
        </div>
      </div>
      <div className="flex justify-between space-x-4 mb-4">
        <button
          type="submit"
          className={`bg-[#00FF84] text-black p-2 rounded-xl transition hover:scale-105 transition duration-200 w-full ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Log In"}
        </button>
        <button
          className="flex items-center justify-center transition hover:scale-105 border rounded-xl p-2 px-3 w-full  hover:bg-gray-100"
          style={{
            backgroundColor: "#ffffff",
          }}
        >
          <svg
            width="17"
            height="16"
            viewBox="-8 -5 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_140_256)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.5 12.7843C28.5 11.898 28.4205 11.0457 28.2727 10.2275H16.5V15.0627H23.2273C22.9375 16.6252 22.0568 17.949 20.733 18.8354V21.9717H24.7727C27.1364 19.7956 28.5 16.5911 28.5 12.7843Z"
                fill="#4285F4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.5005 24.9999C19.8755 24.9999 22.7051 23.8806 24.7733 21.9715L20.7335 18.8352C19.6142 19.5852 18.1824 20.0284 16.5005 20.0284C13.2449 20.0284 10.4892 17.8295 9.50622 14.875H5.33008V18.1136C7.3869 22.1988 11.6142 24.9999 16.5005 24.9999Z"
                fill="#34A853"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.50568 14.8753C9.25568 14.1253 9.11364 13.3241 9.11364 12.5003C9.11364 11.6764 9.25568 10.8753 9.50568 10.1253V6.88672H5.32955C4.48295 8.5742 4 10.4833 4 12.5003C4 14.5173 4.48295 16.4264 5.32955 18.1139L9.50568 14.8753Z"
                fill="#FBBC05"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.5005 4.97154C18.3358 4.97154 19.9835 5.60221 21.2789 6.84084L24.8642 3.25565C22.6994 1.23862 19.8699 0 16.5005 0C11.6142 0 7.3869 2.80111 5.33008 6.88629L9.50622 10.1249C10.4892 7.17038 13.2449 4.97154 16.5005 4.97154Z"
                fill="#EA4335"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_140_256"
                x="0"
                y="0"
                width="32.5"
                height="33"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_140_256"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_140_256"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <span className="text-black text-sm  ml-auto ">
            Sign in with Google
          </span>
        </button>
      </div>
      <p className="mt-4 text-center">
        Don’t have an account?{" "}
        <Link to="/sign-up" className="text-blue-600  hover:underline">
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;