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
    description: "React portfolio with motion effects, responsive layout, and polished presentation.",
    role: "Frontend & UX",
    github: "https://github.com/Thimira116/Portfolio-Web-Site",
    live: null,
    image: PortfolioImg,
    tech: ["React", "CSS", "Framer Motion"],
  },
  {
    title: "Travel Management Website",
    description: "A travel guide portal built with HTML, Bootstrap, PHP, and MySQL for booking flows.",
    role: "Full-stack Web App",
    github: "https://github.com/Thimira116/Lakvisit-Travelling-Web-Site",
    live: null,
    image: LakvisitImg,
    tech: ["HTML", "Bootstrap", "PHP"],
  },
  {
    title: "Mr Cushion Website",
    description: "Booking and feedback website featuring admin workflows and interactive UI.",
    role: "Frontend + Backend",
    github: "https://github.com/Thimira116/mr_cushion",
    live: null,
    image: MrCushionImg,
    tech: ["HTML", "PHP", "MySQL"],
  },
  {
    title: "POS System",
    description: "Grocery billing and inventory system built with Python for desktop usage.",
    role: "Product Logic",
    github: "https://github.com/Thimira116/POS-System",
    live: null,
    image: POSImg,
    tech: ["Python", "Automation", "Inventory"],
  },
  {
    title: "Web-Based POS System (Private Repo)",
    description: "Advanced POS system for grocery stores using PHP and MySQL with admin controls.",
    role: "Full-stack System",
    github: "https://github.com/Thimira116/Web-Base-POS-System",
    live: null,
    image: WPOSImg,
    tech: ["PHP", "MySQL", "Bootstrap"],
  },
  {
    title: "Bus Time Table Website (Private Repo)",
    description: "A final project with admin panel for scheduling bus routes and times.",
    role: "Project Management",
    github: "https://github.com/Thimira116/Bus-Time-Table-Website",
    live: null,
    image: BusImg,
    tech: ["HTML", "PHP", "CSS"],
  },
  {
    title: "Eventro.lk",
    description: "Group event booking site designed for venue management and customer booking.",
    role: "Group Project",
    // github: "https://github.com/Thimira116/Eventro.lk",
    live: "https://eventro.lk/",
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
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12, duration: 0.6 }}
          >
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-content">
              <div className="project-card-head">
                <h2 className="project-card-title">{project.title}</h2>
                <p className="project-role">{project.role}</p>
              </div>
              <p className="project-card-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="project-buttons">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                  >
                    View Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button secondary-button"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
