// src/Pages/ApplicationForm.js
import React, { useState } from 'react';
import './ApplicationForm.css'; // Import the CSS file for styling

function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
    cv: null
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'cv') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  
  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required.';
    if (!formData.email) formErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = 'Email is invalid.';
    if (!formData.phone) formErrors.phone = 'Phone number is required.';
    if (!formData.cv) formErrors.cv = 'CV upload is required.';
    
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Handle form submission
      console.log('Form data submitted:', formData);
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        coverLetter: '',
        cv: null
      });
    }
  };
  
  return (
    <div className="application-form-container">
      <h1>Application Form</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <p className="error-text">{errors.phone}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="coverLetter">Cover Letter</label>
          <textarea 
            id="coverLetter" 
            name="coverLetter" 
            value={formData.coverLetter} 
            onChange={handleChange} 
            rows="4"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="cv">Upload CV</label>
          <input 
            type="file" 
            id="cv" 
            name="cv" 
            onChange={handleChange} 
            className={errors.cv ? 'error' : ''}
          />
          {errors.cv && <p className="error-text">{errors.cv}</p>}
        </div>
        
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default ApplicationForm;
