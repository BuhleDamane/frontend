// src/Pages/About.jsx
import React from 'react';
import './About.css'; // Import the CSS file for styling

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
      </div>
      <div className="about-content">
        <h2>Welcome to Glow and Glam!</h2>
        <p>Your Ultimate Destination for Luxury Hair and Skincare Products.</p>
        
        <section className="hair-info">
          <h3>Our Hair Collection</h3>
          <p>At Glow and Glam, we offer the finest Raw Cambodian and Virgin Vietnamese hair on the market. Our hair products are not just about luxury; they are about quality and durability. Our collection includes raw hair, known for its unparalleled quality and durability. Though raw hair typically comes in three textures—Natural Straight, Wavy, and Curly—we provide versatility by high-pressure steaming some units to achieve popular textures like Bodywave and Burmese Curly. This minimal processing maintains the high quality and durability you expect from us, ensuring your investment lasts for years.</p>
        </section>

        <section className="hair-products">
          <h3>Hair Products</h3>
          <p>We also offer a range of essential hair products to complement our hair collections. Explore our selection of hot combs, hair combs, heat protective products, lace bands, wax sticks, hair glue, and mousse. All designed to help you maintain and enhance the beauty of your hair.</p>
        </section>

        <section className="skincare-info">
          <h3>Our Skincare Range</h3>
          <p>Glow and Glam is not just about hair; we also offer premium skincare products. Our range includes stretch mark oils and lotions designed to visibly reduce stretch marks from week 4. Additionally, we offer turmeric-based products such as oils, lotions, serums, cleansers, and face creams that target dark spots, uneven skin tone, and blemishes.</p>
        </section>

        <section className="philosophy">
          <h3>Our Philosophy</h3>
          <p>Welcome to Glow and Glam, your haven of elegance. Our mission is simple: to provide our customers with the highest quality hair and skincare products without compromising convenience. We prioritize durability, consistency, and premium quality. By researching and sourcing from multiple suppliers and performing rigorous quality assessments, we ensure that you receive products that exceed your expectations. Thank you for choosing Glow and Glam for your beauty needs.</p>
        </section>
      </div>
    </div>
  );
}

export default About;
