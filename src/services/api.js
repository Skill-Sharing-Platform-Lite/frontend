// src/services/api.js

const API_BASE_URL = "http://localhost:5000"; // Replace with your backend URL

// Helper function to handle API requests
const fetchAPI = async (endpoint, method = "GET", body = null) => {
  const headers = {
    "Content-Type": "application/json",
  };

  // Add authorization header if a token exists
  const token = localStorage.getItem("token");
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Something went wrong");
  }

  return response.json();
};

// User Authentication
export const loginUser = async (email, password) => {
  return fetchAPI("/api/login", "POST", { email, password });
};

export const registerUser = async (userData) => {
  return fetchAPI("/api/register", "POST", userData);
};

// User Profile
export const getUserProfile = async (userId) => {
  return fetchAPI(`/api/user/${userId}`);
};

export const updateUserProfile = async (userId, updatedData) => {
  return fetchAPI(`/api/user/${userId}`, "PUT", updatedData);
};

// Skills
export const listSkills = async () => {
  return fetchAPI("/api/skills");
};

export const searchSkills = async (query) => {
  return fetchAPI(`/api/skills?q=${query}`);
};

// Matchmaking
export const getMatches = async (userId) => {
  return fetchAPI(`/api/matches/${userId}`);
};

// Messaging
export const sendMessage = async (receiverId, message) => {
  return fetchAPI("/api/messages", "POST", { receiverId, message });
};

export const getMessages = async (receiverId) => {
  return fetchAPI(`/api/messages/${receiverId}`);
};