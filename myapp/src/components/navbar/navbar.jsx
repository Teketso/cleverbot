import React, { useState } from 'react';
import './navbar.css'; // Assuming the CSS file is in the same folder

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="https://img.icons8.com/?size=100&id=1349&format=png&color=000000" alt="Company Logo" className="navbar-logo" />
        <span className="navbar-company-name">insurance</span>
      </div>

      {/* Right Section: Hamburger and Buttons */}
      <div className="navbar-hamburger-and-buttons">
        <div className="navbar-right">
          <button className="navbar-btn">Log in</button>
          <button className="navbar-btn primary-btn">Get Started</button>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
