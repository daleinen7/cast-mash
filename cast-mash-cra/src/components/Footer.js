import React from 'react'
import footerLogo from '../static/03.png'
import './Footer.css'

function Footer() {
  return (
    <div className="footer-container">
      <img src={ footerLogo } alt="logo" />
      <p>Castmash © 2021</p>
    </div>
  );
};

export default Footer;