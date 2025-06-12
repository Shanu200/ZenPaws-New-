import React, { useState } from "react";
import "./Contact.css";
import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8081/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="contact-container">
      {/* Left Section */}
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Fill up the form and our Team will get back to you within 24 hours.</p>
        <div className="contact-details">
          <p>
            <span>📞</span> Phone: +99 2355 598
          </p>
          <p>
            <span>📧</span> Email: zenpawspet@gmail.com
          </p>
          <p>
            <span>🌐</span> Website: zenpawspettherapy.com
          </p>
        </div>
        <div className="social-icons">
          <a href="#" className="icon">
            <FaFacebookSquare size={25} color="#4267B2" />
          </a>
          <a href="#" className="icon">
            <FaTwitter size={25} color="#1DA1F2" />
          </a>
          <a href="#" className="icon">
            <FaLinkedin size={25} color="#2867B2" />
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="contact-form">
        <h2>Send us a message</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Write your message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};
