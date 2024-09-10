// src/Pages/Contact.jsx
import React from 'react';
import './Contact.css'; // Import the CSS file for styling

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>If you have any questions or inquiries, please feel free to contact us through the form below.</p>
        <p>Email: support@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Main Street, Anytown, USA</p>
      </div>
      <div className="contact-form">
        <h2>Contact Form</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="6" required></textarea>

          <input type="submit" value="Send Message" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
