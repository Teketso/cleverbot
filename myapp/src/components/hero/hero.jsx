import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <div className="first-component">
      <h1 className="title">Life Planning, Making Easy to Turn Dreams a Reality</h1>
      <p className="description">Get Exclusive offers on purchase of any plans.</p>
      <div className="input-group">
        <input type="email" placeholder="Your email" className="email-input" />
        <button className="signup-btn">Sign Up</button>
      </div>
    </div>
  );
};

export default Hero;
