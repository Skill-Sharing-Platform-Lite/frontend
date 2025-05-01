import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submit behavior
    setLoading(true);
    setError(null);

    try {
      // Send the data to the backend
      const response = await fetch('http://your-backend-url.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      // Check if the response is successful
      if (response.ok) {
        // Redirect user after successful signup (you can navigate them to the login page or home)
        navigate('/login');
      } else {
        const data = await response.json();
        setError(data.message || 'Signup failed, please try again!');
      }
    } catch (error) {
      setError('An error occurred, please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Create an Account</h2>

        {/* Email input */}
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />

        {/* Password input */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />

        {/* Error message */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Links and buttons */}
        <div className="flex justify-between items-center mb-4">
          <Link to="/login" className="text-blue-500">Log In</Link>
        </div>

        {/* Sign Up Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white p-2 rounded"
          disabled={loading}
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>

        <div className="mt-4 text-center">
          <button className="w-full bg-red-500 text-white p-2 rounded">Sign in with Google</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;