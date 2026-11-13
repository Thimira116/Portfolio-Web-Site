import React from "react";
import { motion } from "framer-motion";
import "./App.css";
import profilePic from "./assets/Profile.webp";

function About() {
  return (
    <div className="about-page">
      <motion.div
        className="about-wrapper"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <div className="about-hero">
          <div className="about-portrait">
            <motion.img
              src={profilePic}
              alt="Thimira Savinda"
              className="about-photo"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            />
            <span className="about-portrait-index" aria-hidden="true">01 / PROFILE</span>
          </div>

          <div className="about-summary">
            <p className="about-label">About Me</p>
            <h1 className="about-title">Creative Web Developer</h1>
            <p className="about-intro">
              I’m <strong>Thimira Savinda</strong>, a passionate Full Stack Developer
              focused on building modern, responsive, and user-friendly web
              applications. I enjoy creating seamless digital experiences, developing
              practical solutions, and transforming creative ideas into functional
              products. I value clean code, problem-solving, and delivering reliable
              applications.
            </p>

            <div className="about-metrics">
              <div className="about-metric-card">
                <h3>Web Applications</h3>
                <p>Responsive frontends with polished UI and smooth interactions.</p>
              </div>
              <div className="about-metric-card">
                <h3>Backend Logic</h3>
                <p>Creating intelligent web applications with powerful features and
                  seamless functionality.</p>
              </div>
              <div className="about-metric-card">
                <h3>Quality Focus</h3>
                <p>Testing and reviewing features to ensure reliable user experiences.</p>
              </div>
            </div>

            <div className="about-info-grid">
              <div className="about-info-card">
                <span>Education</span>
                <p>Sri Lanka Institute of Advanced Technological Education, Galle</p>
              </div>
              <div className="about-info-card">
                <span>Department</span>
                <p>Information Technology (HNDIT 2024 - Present)</p>
              </div>
              <div className="about-info-card">
                <span>Qualifications</span>
                <p>Diploma in English Language and Literature, Aquinas College of Higher Studies (2024-2025)</p>
              </div>
            </div>
          </div>
        </div>

        <section className="skills-section about-skills-section">
          <div className="section-headline">
            <p className="section-label">Skills</p>
            <h2>Tools & Technologies</h2>
          </div>

          <div className="skills-logos">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" title="HTML" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" title="CSS" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" title="React.js" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" title="Bootstrap" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" title="PHP" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" title="MySQL" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" title="Java" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" title="C#" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" title="Python" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" title="Git" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Github" title="Github" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" alt="WordPress" title="WordPress" />
          </div>
        </section>

      </motion.div>
    </div>
  );
}

export default About;
