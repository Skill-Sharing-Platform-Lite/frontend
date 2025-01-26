import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Component/Header";
import LoginPage from "./Component/LoginPage";
import LoginForm from "./Component/LoginForm";
import Home from "./Pages/HomePage/Home";
import Detail from "./Pages/HomePage/Detail";
import { ChatView } from "./Component/Chatbot/ChatView";
import ErrorBoundary from "./Component/Chatbot/ErrorBoundary";
import Profile from "./Component/profile";
import RegisterPage from "./pages/RegisterPage";
import Connect from "./pages/MatchMaking";
import Dashboard from "./pages/Dashbord";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
  };

  return (
    <Routes>
      {/* Default Route */}
      <Route path="/" element={<LoginPage onLogin={handleLogin} />} />

      {/* Header Routes */}
      <Route path="/about" element={<Header />} />
      <Route path="/how-it-works" element={<Header />} />
      <Route path="/contact" element={<Header />} />

      {/* Authentication Routes */}
      <Route path="/sign-up" element={<RegisterPage />} /> {/* Registration route */}
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      <Route path="/forgot-password" element={<LoginPage />} /> {/* Forgot Password route */}

      {/* Home and Detail Routes */}
      <Route path="/home" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />

      {/* Chat Route */}
      <Route
        path="/chat"
        element={
          <ErrorBoundary>
            <ChatView />
          </ErrorBoundary>
        }
      />

      {/* Connect Route */}
      <Route path="/connect" element={<Connect />} />

      {/* Dashboard Routes */}
      <Route path="/signup" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Profile Route */}
      <Route path="/profile" element={<Profile />} />

      {/* Fallback Route (Optional) */}
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
};

export default App;
