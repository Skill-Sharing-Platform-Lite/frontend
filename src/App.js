// App.js
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from  "./Component/Header"
import LoginPage from "./Component/LoginPage"; // You can create a HomePage component for this route
import LoginForm from "./Component/LoginForm";
import Home from "./Pages/HomePage/Home";
import Detail from "./Pages/HomePage/Detail";

import { ChatView } from "./Component/Chatbot/ChatView";
import ErrorBoundary from "./Component/Chatbot/ErrorBoundary";

import Profile from "./Component/profile";
import Connect from "./pages/MatchMaking";
  
const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
  };

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/:id" element={<Detail/>} />

      <Route path="/about" element={<Header />}></Route>
      <Route path="/how-it-works" element={<Header />}></Route>
      <Route path="/contact" element={<Header />}></Route>
      <Route
        path="/chat"
        element={
          <ErrorBoundary>
            <ChatView />
          </ErrorBoundary>
        }
      ></Route>
      <Route path="/connect" element={<Connect />} />

      <Route path="/Forgot Password" element={<LoginPage />}></Route>

     


      <Route path="/Sign Up" element={<LoginForm />} ></Route>
    <Route path="/profile" element={<Profile/>}/>

      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
    </Routes>
  );
};

export default App;
