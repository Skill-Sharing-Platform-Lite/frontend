import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    
    if (password.length < minLength) {
      return `Password must be at least ${minLength} characters long`;
    }
    if (!hasUpperCase || !hasLowerCase || !hasNumbers || !hasSpecialChars) {
      return "Password must include uppercase, lowercase, number, and special character";
    }
    return "";
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setPasswordError(""); 
    setLoading(true);

    // Validate password before making the "API call"
    const passwordValidationError = validatePassword(password);
    if (passwordValidationError) {
      setPasswordError(passwordValidationError);
      setLoading(false);
      return;
    }

    // Mock API call (replace with actual API call)
    setTimeout(() => {
      if (email === "user@example.com" && password === "password") {
        alert("user");
      } else {
        setError("Invalid credentials");
      }
      setLoading(false);
    }, 1000);
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
        
        <svg
          width="20"
          height="17"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-3 top-9"
        >
          <path
            d="M19.0438 12H20.0446C20.5973 12 21.0454 12.4477 21.0454 13V23C21.0454 23.5523 20.5973 24 20.0446 24H4.03204C3.47932 24 3.03125 23.5523 3.03125 23V13C3.03125 12.4477 3.47932 12 4.03204 12H5.03282V11C5.03282 7.13401 8.16929 4 12.0383 4C15.9074 4 19.0438 7.13401 19.0438 11V12ZM17.0422 12V11C17.0422 8.23858 14.8019 6 12.0383 6C9.27473 6 7.03439 8.23858 7.03439 11V12H17.0422ZM11.0375 16V20H13.0391V16H11.0375Z"
            fill="#D0D0D0"
          />
        </svg>

        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 pl-10 w-full rounded-xl" 
          required
        />
        {passwordError && <p className="text-red-500 text-xs mt-2">{passwordError}</p>}

        <div className="flex justify-between">
          <Link
            to="/Forgot Password"
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
      </div>
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      <p className="mt-4 text-center">
        Don’t have an account?{" "}
        <Link to="/Sign Up" className="text-blue-600 hover:underline">
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
