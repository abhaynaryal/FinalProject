import React from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className='gem'>
        <p>Gemini</p>
      </Link>

      {/* Flexbox to hold the links and user icon together */}
      {/* <div className="nav-right">
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-link">Sign Up</Link>
        <img src={assets.user_icon} alt="user icon" className="user-icon" />
      </div> */}
    </nav>
  );
};

export default Navbar;
