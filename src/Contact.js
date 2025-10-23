import React from "react";
import "./App"; // Use a separate CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>Contact Me</h1>
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
            href="www.linkedin.com/in/thimira-savinda-279482329"
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
            href="https://wa.me/+94787842415"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
              alt="WhatsApp Logo"
            />
          </a>
          <a
            href="mailto:thimirapost116@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
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
