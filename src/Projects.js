import React from "react";
import { motion } from "framer-motion";
import "./App.css";
import PortfolioImg from "./assets/Portfolio.png";
import LakvisitImg from "./assets/Lakvisit.png";
import MrCushionImg from "./assets/MrCushion.png";
import POSImg from "./assets/POS.png";
import WPOSImg from "./assets/WPOS.png";
import BusImg from "./assets/Bus.png";
import EventroImg from "./assets/Eventro.png";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React.js and CSS.",
    link: "https://github.com/Thimira116/Portfolio-Web-Site",
    image: PortfolioImg,
    tech: ["React", "CSS", "Design"],
  },
  {
    title: "Travel Management Website",
    description: "An online travel guide website built using HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL.",
    link: "https://github.com/Thimira116/Lakvisit-Travelling-Web-Site",
    image: LakvisitImg,
    tech: ["HTML", "Bootstrap", "PHP"],
  },
  {
    title: "Mr Cushion Website",
    description: "A booking and feedback website built using HTML, CSS, JavaScript, PHP, and MySQL.",
    link: "https://github.com/Thimira116/mr_cushion",
    image: MrCushionImg,
    tech: ["HTML", "PHP", "MySQL"],
  },
  {
    title: "POS System",
    description: "A POS system for grocery shops to manage billing and inventory using Python.",
    link: "https://github.com/Thimira116/POS-System",
    image: POSImg,
    tech: ["Python", "Inventory", "Automation"],
  },
  {
    title: "Web-Base POS System (Private)",
    description: "A POS system with advance features for grocery shops to manage billing and inventory using PHP & MySQL.",
    link: "https://github.com/Thimira116/Web-Base-POS-System",
    image: WPOSImg,
    tech: ["PHP", "MySQL", "Bootstrap"],
  },
  {
    title: "Bus Time Table Website (Private)",
    description: "Web-base bus time table website with admin panel for final project of institute.",
    link: "https://github.com/Thimira116/Bus-Time-Table-Website",
    image: BusImg,
    tech: ["HTML", "PHP", "CSS"],
  },
  {
    title: "Eventro.lk (Group Project)",
    description: "A group project for managing events and bookings.",
    link: "https://eventro.lk/",
    image: EventroImg,
    tech: ["Bootstrap", "PHP", "CSS"],
  }
];

function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-header">
        <p className="section-label">Selected Work</p>
        <h1 className="projects-title">Featured Projects</h1>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
          >
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h2 className="project-card-title">{project.title}</h2>
              <p className="project-card-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link"
              >
                View Repository
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
