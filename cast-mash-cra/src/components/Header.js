import React from 'react';
import './Header.css';
import logo from '../static/logo.png'

function Header() {
  return (
    <div className="header-container">
      <img className="logo" src={logo} alt="logo" />
    </div>
  );
};

export default Header;