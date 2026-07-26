import React from "react";
import "./App.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <p className="contact-eyebrow">Let’s connect</p>
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-text">
          I’m available for internship opportunities and freelance projects.
          If you need a reliable website, booking system, or QA-focused developer,
          send a message and let’s talk about your next project.
        </p>

        <div className="contact-grid">
          <div className="contact-box">
            <strong>Email</strong>
            <a href="mailto:thimirapost116@gmail.com">thimirapost116@gmail.com</a>
          </div>
          <div className="contact-box">
            <strong>Phone</strong>
            <a href="https://wa.me/+94787842415" target="_blank" rel="noopener noreferrer">
              WhatsApp Chat
            </a>
          </div>
          <div className="contact-box">
            <strong>Availability</strong>
            <p>Open for internships, freelance web work, and collaboration.</p>
          </div>
        </div>

        <div className="contact-actions contact-actions-wide">
          <a href="mailto:thimirapost116@gmail.com" className="primary-button">
            Email Me
          </a>
          <a
            href="https://wa.me/+94787842415"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button"
          >
            WhatsApp
          </a>
        </div>

        <p className="contact-note">
          Want a professional resume link here? Add a resume PDF to the public folder and I can wire it in.
        </p>

        <div className="social-links">
          <a
            href="https://github.com/Thimira116"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
              alt="GitHub Logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/thimira-savinda-279482329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
              alt="LinkedIn Logo"
            />
          </a>
          <a
            href="mailto:thimirapost116@gmail.com"
            className="social-icon"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/maildotru.svg"
              alt="Email Logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
