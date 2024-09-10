// src/Pages/Careers.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Careers.css'; // Import the CSS file for styling

function Careers() {
  return (
    <div className="careers-container">
      <div className="careers-header">
        <h1>Join Our Team</h1>
        <p>At Glow and Glam, we are always on the lookout for talented and passionate individuals to join our team. Explore our current job openings and become a part of our exciting journey!</p>
      </div>
      
      <section className="current-openings">
        <h2>Current Job Openings</h2>
        <ul>
          <li>
            <h3>Product Manager</h3>
            <p><strong>Location:</strong> Remote</p>
            <p><strong>Responsibilities:</strong> Oversee the development and management of our product lines, from concept to launch. Collaborate with marketing, sales, and design teams to ensure product success.</p>
            <p><strong>Qualifications:</strong> 3+ years in product management, experience in the beauty or skincare industry is a plus, strong organizational skills, and the ability to manage multiple projects simultaneously.</p>
            <Link to="/application-form" className="apply-button">Apply Now</Link> {/* Updated to use Link */}
          </li>
          <li>
            <h3>Marketing Specialist</h3>
            <p><strong>Location:</strong> New York, NY</p>
            <p><strong>Responsibilities:</strong> Develop and execute marketing strategies to promote our hair and skincare products. Manage social media accounts, create engaging content, and analyze campaign performance.</p>
            <p><strong>Qualifications:</strong> 2+ years in marketing, experience with digital marketing tools and platforms, excellent communication skills, and a creative mindset.</p>
            <Link to="/application-form" className="apply-button">Apply Now</Link> {/* Updated to use Link */}
          </li>
          <li>
            <h3>Customer Service Representative</h3>
            <p><strong>Location:</strong> Los Angeles, CA</p>
            <p><strong>Responsibilities:</strong> Provide exceptional customer service, handle inquiries, resolve issues, and ensure customer satisfaction. Assist with order processing and product information.</p>
            <p><strong>Qualifications:</strong> Excellent communication skills, experience in customer service, ability to work in a fast-paced environment, and a passion for the beauty industry.</p>
            <Link to="/application-form" className="apply-button">Apply Now</Link> {/* Updated to use Link */}
          </li>
          <li>
            <h3>Graphic Designer</h3>
            <p><strong>Location:</strong> Remote</p>
            <p><strong>Responsibilities:</strong> Create visually appealing designs for our website, marketing materials, and social media. Work closely with the marketing team to ensure brand consistency.</p>
            <p><strong>Qualifications:</strong> Proficiency in Adobe Creative Suite, a strong portfolio showcasing design skills, attention to detail, and experience with branding.</p>
            <Link to="/application-form" className="apply-button">Apply Now</Link> {/* Updated to use Link */}
          </li>
        </ul>
      </section>

      <section className="our-team">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="John Doe" />
          <h3>John Doe</h3>
          <p><strong className='ceo'>CEO</strong></p>
          <p>John is the visionary behind Glow and Glam, bringing years of experience in the beauty industry and a passion for luxury products.</p>
        </div>
        <div className="team-member">
          <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Jane Smith" />
          <h3>Jane Smith</h3>
          <p><strong>Chief Marketing Officer</strong></p>
          <p>Jane leads our marketing team with innovative strategies and creative campaigns that showcase our products to the world.</p>
        </div>
        <div className="team-member">
          <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Robert Brown" />
          <h3>Robert Brown</h3>
          <p><strong className='head'>Head of Customer Service</strong></p>
          <p>Robert ensures that every customer has an exceptional experience, providing support and resolving issues with efficiency and care.</p>
        </div>
      </section>
    </div>
  );
}

export default Careers;
