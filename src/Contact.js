import React, { useState } from "react";
import "./App.css";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoUrl = `mailto:thimirapost116@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setFormStatus("Your email app should open with your message ready to send.");
  };

  return (
    <div className="contact-container">
      <div className="contact-layout">
        <div className="contact-copy">
          <p className="contact-eyebrow">Let’s connect</p>
          <h1 className="contact-title">Contact Me</h1>
          <p className="contact-text">
            I’m passionate about building modern web applications and full-stack
            solutions. Whether you need a responsive website, custom web application,
            or complete business management system, let’s connect and bring your ideas
            to life.
          </p>
        </div>

        <div className="contact-details">
          <div className="contact-grid">
            <div className="contact-box">
              <strong>Email</strong>
              <a href="mailto:thimirapost116@gmail.com">thimirapost116@gmail.com</a>
            </div>
            <div className="contact-box">
              <strong>Phone</strong>
              <a href="tel:+94787842415">+94787842415</a>
            </div>
            <div className="contact-box">
              <strong>Availability</strong>
              <p>Open to freelance projects, web development opportunities, and collaborations.</p>
            </div>
          </div>

          <div className="contact-socials">
            <p className="contact-social-label">Find me online</p>
            <div className="social-links">
              <a
                href="https://github.com/Thimira116"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon social-icon-github"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
                  alt="GitHub"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/thimira-savinda-279482329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon social-icon-linkedin"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
                  alt="LinkedIn"
                />
              </a>
              <a
                href="https://wa.me/+94787842415"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon social-icon-whatsapp"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
                  alt="WhatsApp"
                />
              </a>
              <a href="mailto:thimirapost116@gmail.com" className="social-icon social-icon-email">
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/maildotru.svg"
                  alt="Email"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="contact-form-section" aria-labelledby="contact-form-title">
        <div className="contact-form-heading">
          <p className="contact-social-label">Direct message</p>
          <h2 id="contact-form-title">Tell me about your project</h2>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-fields">
            <label>
              Your name
              <input type="text" name="name" autoComplete="name" required />
            </label>
            <label>
              Your email
              <input type="email" name="email" autoComplete="email" required />
            </label>
            <label className="contact-form-wide">
              Subject
              <input type="text" name="subject" required />
            </label>
            <label className="contact-form-wide">
              Message
              <textarea name="message" rows="5" required />
            </label>
          </div>
          <div className="contact-form-footer">
            <p className="contact-form-hint">
              Submitting opens your email app so you can review and send the message.
            </p>
            <button type="submit" className="primary-button">Prepare Email</button>
          </div>
          <p className="contact-form-status" aria-live="polite">{formStatus}</p>
        </form>
      </section>
    </div>
  );
};

export default Contact;
