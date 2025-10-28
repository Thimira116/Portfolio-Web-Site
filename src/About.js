import React from "react";
import { motion } from "framer-motion";
import "./App.css";
import profilePic from "./assets/profile.jpg";

function About() {
  return (
    <div className="about-page">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/*Profile photo (optional)*/}
        {<motion.img
          src={profilePic}
          alt="Thimira Savinda"
          className="about-photo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />}

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1 className="about-title">About Me</h1>
          <p className="about-intro">
            Hi, I’m <strong>Thimira Savinda</strong> — a web developer passionate
            about building modern, responsive, and creative websites using
            <strong> React.js</strong>, <strong>PHP</strong>, and <strong>MySQL</strong>.
          </p>
          <div>
            <h1>Education</h1>

            <p><strong>Student at:</strong> Sri Lanka Institute Of Advance Technological Education  - Galle</p>
            <p><strong>Department:</strong> Information Technology (HNDIT 2024- Present)</p>

            <h1>Qualifications</h1>

            <p><strong>Diploma in</strong> English Language and Literature (Aquinas College of Higher Studies 2024-2025)</p>


            {/* Skills Section */}
            <div className="skills-section">
              <h1>Web Design Skills</h1>

              <div className="skills-logos">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" title="HTML" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" title="CSS" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" title="React.js" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" title="Bootstrap" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" title="PHP" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" title="MySQL" />

              </div>
            </div>
          </div>

          <p className="about-extra">
            I’m currently exploring new web technologies and love turning creative ideas into
            smooth and interactive web experiences.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
