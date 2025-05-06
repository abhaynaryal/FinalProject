import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../context/Context';
import './Navbar.css';

const Navbar = () => {
  const { isLoggedin, setIsLoggedin } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedin(false);
    navigate('/login');
    
  };

  return (
    <nav className="nav">
      <Link to="/" className='gem'>
        <p>Gemini</p>
      </Link>

      {/* Conditionally render the Login/Logout button */}
      <div className="nav-right">
        {isLoggedin ? (
          
            <button onClick={handleLogout}>Logout</button>
          
        ) : (
          <>
            <button className="custom-btn home-btn" onClick={() => navigate('/Home')}>Home</button>
            <button className="custom-btn signin-btn" onClick={() => navigate('/login')}>Sign In</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
