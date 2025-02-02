// LoginPage.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext'; 
import './LoginPage.css'; // Import your CSS styles

const staticUserId = 'admin';
const staticPassword = 'password123';

function LoginPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // For error feedback
  const { login } = useContext(AuthContext); // Use the login method from AuthContext
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userId === staticUserId && password === staticPassword) {
      login(); // Call login from AuthContext
      navigate('/'); // Navigate to home page
    } else {
      setError('Invalid user ID or password.'); // Set error message
    }
  };

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => {
          setUserId(e.target.value);
          setError(''); // Reset error on input change
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setError(''); // Reset error on input change
        }}
      />
      {error && <p className="error-message">{error}</p>} {/* Display error message if exists */}
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account?{' '}
        <button onClick={goToRegister}>Register here</button>
      </p>
    </div>
  );
}

export default LoginPage;
