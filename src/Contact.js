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
          Send a message and let’s talk about ideas, collaboration, or your next website.
        </p>

        <div className="contact-actions">
          <a
            href="mailto:thimirapost116@gmail.com"
            className="primary-button"
          >
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
