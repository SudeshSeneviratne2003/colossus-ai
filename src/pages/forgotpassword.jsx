import React, { useState } from "react";
import "./forgotpassword.css";

const ForgotPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your password reset logic here
  };

  return (
    <div className="forgot-password-container">
      <div className="header">
        {/* <div className="logo-container">
          <span className="logo-text">Colossus.AI</span>
        </div> */}
        {/* <button className="theme-toggle">
          🌗
        </button> */}
      </div>

      <div className="main-content">
        <h1 className="title">Good to go</h1>
        <h2 className="subtitle">Chief</h2>

        <form onSubmit={handleSubmit} className="password-form">
          <div className="input-container">
            <input
              type={showPassword1 ? "text" : "password"}
              placeholder="Enter New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="password-input"
            />
            <button
              type="button"
              className="toggle-visibility"
              onClick={() => setShowPassword1(!showPassword1)}
            >
              👁️
            </button>
          </div>

          <div className="input-container">
            <input
              type={showPassword2 ? "text" : "password"}
              placeholder="Re-Enter New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="password-input"
            />
            <button
              type="button"
              className="toggle-visibility"
              onClick={() => setShowPassword2(!showPassword2)}
            >
              👁️
            </button>
          </div>

          <button type="submit" className="confirm-button">
            Confirm
          </button>
        </form>
      </div>

      <footer className="footer">
        <p>Copyright © Colossus.AI. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ForgotPassword;
