// LoginPage.js

import React from 'react';
import Header from './Header';
import LoginForm from './LoginForm';

const LoginPage = ({ onLogin }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <Header />
      <main className="flex-grow container mx-auto max-w-md p-4">
        <h2 className=" font-poppins font-normal text-[-64px] leading-[64px] text-3xl font-bold text-center mt-8 mb-2">Welcome Back!</h2>
        <p className="mb-4 px-4 text-center">
          Log in to connect with your peers and continue your skill-sharing journey!
        </p>
        <LoginForm onLogin={onLogin} />
      </main>
    </div>
  );
};

export default LoginPage;