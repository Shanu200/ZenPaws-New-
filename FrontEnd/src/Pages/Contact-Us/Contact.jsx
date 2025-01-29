import React from "react";
import "./Contact.css";
import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="contact-container">
      {/* Left Section */}
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>
          Fill up the form and our Team will get back to you within 24 hours.
        </p>
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
        <form>
          <div className="form-group">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Phone" required />
          </div>
          <textarea
            placeholder="Write your message"
            rows="4"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};
