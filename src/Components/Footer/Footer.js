// src/Components/Footer.js
import React from 'react';
import './Footer.css'; 
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Policies</h2>
          <div className="policies-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/shipping-policy">Shipping Policy</a>
            <a href="/refund-policy">Refund Policy</a>
            <a href="/contact">Contact Information</a>
          </div>
        </div>
        <div className="footer-section">
          <h2>Subscribe to Our Emails</h2>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="subscribe-button">→</button>
          </form>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-links">
            <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer"><span className='whatsapp'><IoLogoWhatsapp /></span></a>
            <a href="https://facebook.com/yourfacebookpage" target="_blank" rel="noopener noreferrer"><span className='facevook'><FaFacebookSquare /></span></a>
            <a href="https://twitter.com/yourtwitterhandle" target="_blank" rel="noopener noreferrer"><span className='twitter'><FaSquareXTwitter /></span></a>
            <a href="https://instagram.com/yourinstagramhandle" target="_blank" rel="noopener noreferrer"><span className='insta'><FaInstagramSquare /></span></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} <span className='glow'>Glow & Glam</span>. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
