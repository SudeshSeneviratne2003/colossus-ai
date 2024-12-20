import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    
    if (checked) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <div>
      <div className="navbar-container">
        <div className='rotate-logo'>
          <img src="./src/assets/colossusailogo.png" alt="Colossusai Logo" />
          <span  className="brand-name">Colossus.AI</span>
        </div>

        <div className='nav-links-container'>
          <div><Link to='/home' className='links'>Home</Link></div>
          <div><Link to='/features' className='links'>Features</Link></div>
          <div><Link to='/feedback' className='links'>Feedback</Link></div>
          <div><Link to='/about' className='links'>About</Link></div>
          <div><Link to='/contactus' className='links'>Contact us</Link></div>
        </div>

        <div className='login-signup-container'>

          <div className='combine-btn'>
            <span><Link to='/login' className='links1'>Login</Link></span>
            <span><Link to='/signup' className='links2'>Signup</Link></span>
          </div>
          
          <div className="darkmode-icon">
            <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={30}/>
          </div>

          <div></div>
        </div>
        
      </div>
    </div>
  );
}

export default Navbar;
