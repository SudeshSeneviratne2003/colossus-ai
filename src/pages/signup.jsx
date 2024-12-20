import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

function Signup() {
  return (
    <div className="signup-container">
      <h1>Welcome!</h1>
      <p>Signup to your account</p>
      <form className="signup-form">
        <div className="name-row">
          <input type="text" placeholder="First name" className="signup-input name-input" />
          <input type="text" placeholder="Surname" className="signup-input name-input" />
        </div>
        
        <input type="email" placeholder="Email Address" className="signup-input wide-input" />
        <input type="password" placeholder="Create Password" className="signup-input wide-input" />
        <input type="password" placeholder="Confirm Password" className="signup-input wide-input" />
        
        <div className='signup-checkbox'>
          <button type="submit" className="signup-button">Create Account</button>
        </div>

        <p className="signup-already">Already Registered? <Link to='/login' className=''>Login</Link></p>
        <button className="google-btn">
          <FontAwesomeIcon icon={faGoogle} className="google-icon" />Continue with Google
        </button>
      </form>
    </div>
  );
}

export default Signup;