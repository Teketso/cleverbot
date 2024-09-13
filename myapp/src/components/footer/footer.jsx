import React from 'react';
import './footer.css'; // Assuming the CSS file is in the same folder

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <a href="#terms" className="footer-link">Terms</a>
        <a href="#policy" className="footer-link">Policy</a>
        <a href="#customer-story" className="footer-link">Customer Story</a>
      </div>
      <div className="footer-right">
        <div className="arrow-container">
          <span className="arrow">&rarr;</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
