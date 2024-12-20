import React from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

function Login() {
  return (
    <div className="login-container">
      <h2>Let's get</h2>
      <h1>Started!</h1>
      <form className="login-form">
        <input type="text" placeholder="Email address / Username" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <a href="#" className="forgot-password">Forgot Password?</a>
        <button type="submit" className="login-button">Login</button>
        <div className="signup-section">
          Not Registered? <a href="#" className="signup-link">Create an account</a>
        </div>
        <button className="google-btn">
          <FontAwesomeIcon icon={faGoogle} className="google-icon" />Continue with Google
        </button>
      </form>
    </div>
  );
}

export default Login;