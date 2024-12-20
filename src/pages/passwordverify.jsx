import React, { useState } from "react";
import "./passwordverify.css";

const PasswordVerify = () => {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const handleSendCode = (e) => {
    e.preventDefault();
    // Add logic to send verification code
  };

  const handleVerify = (e) => {
    e.preventDefault();
    // Add verification logic here
  };

  return (
    <div className="verify-container">
      <div className="main-content">
        <h1 className="title">Need a Help with</h1>
        <h2 className="subtitle">Login?</h2>

        <form className="verify-form">
          <div className="input-group">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="verify-input"
            />
            <button 
              type="button" 
              onClick={handleSendCode}
              className="send-code-btn"
            >
              Send Code
            </button>
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder="Enter 6 Digit code send to your Email"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="verify-input"
            />
            <button 
              type="button" 
              onClick={handleVerify}
              className="verify-btn"
            >
              Verify
            </button>
          </div>
        </form>
      </div>

      <footer className="footer">
        <p>Copyright © Colossus.AI. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default PasswordVerify; 