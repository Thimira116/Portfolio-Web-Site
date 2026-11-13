import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import PortfolioImg from "./assets/Portfolio.webp";
import LakvisitImg from "./assets/Lakvisit.webp";
// import MrCushionImg from "./assets/MrCushion.webp";
import POSImg from "./assets/POS.webp";
import WPOSImg from "./assets/WPOS.webp";
import BusImg from "./assets/Bus.webp";
// import EventroImg from "./assets/Eventro.png";
import AirticketImg from "./assets/Airticket.webp";
import ConstructionImg from "./assets/Construction.webp";

const projects = [
  {
    title: "Portfolio Website",
    description: "React portfolio with motion effects, responsive layout, and polished presentation.",
    role: "Frontend & UX",
    category: "Personal",
    github: "https://github.com/Thimira116/Portfolio-Web-Site",
    live: null,
    image: PortfolioImg,
    tech: ["React", "CSS", "Framer Motion"],
  },
  {
    title: "Travel Management Website",
    description: "A travel guide portal built with HTML, Bootstrap, PHP, and MySQL for booking flows.",
    role: "Full-stack Web App",
    category: "Personal",
    github: "https://github.com/Thimira116/Lakvisit-Travelling-Web-Site",
    live: null,
    image: LakvisitImg,
    tech: ["HTML", "Bootstrap", "PHP"],
  },
  // {
  //   title: "Mr Cushion Website",
  //   description: "Booking and feedback website featuring admin workflows and interactive UI.",
  //   role: "Frontend + Backend",
  //   category: "Personal",
  //   github: "https://github.com/Thimira116/mr_cushion",
  //   live: null,
  //   image: MrCushionImg,
  //   tech: ["HTML", "PHP", "MySQL"],
  // },
  {
    title: "POS System",
    description: "Grocery billing and inventory system built with Python for desktop usage.",
    role: "Product Logic",
    category: "Personal",
    github: "https://github.com/Thimira116/POS-System",
    live: null,
    image: POSImg,
    tech: ["Python", "Automation", "Inventory"],
  },
  {
    title: "Web-Based POS System (Private Repo)",
    description: "Advanced POS system for grocery stores using PHP and MySQL with admin controls.",
    role: "Full-stack System",
    category: "Personal",
    github: "https://github.com/Thimira116/Web-Base-POS-System",
    live: null,
    image: WPOSImg,
    tech: ["PHP", "MySQL", "Bootstrap"],
  },
  {
    title: "Bus Time Table Website (Private Repo)",
    description: "A final project with admin panel for scheduling bus routes and times.",
    role: "Project Management",
    category: "Academic",
    github: "https://github.com/Thimira116/Bus-Time-Table-Website",
    live: null,
    image: BusImg,
    tech: ["HTML", "PHP", "CSS"],
  },
  // {
  //   title: "Eventro.lk",
  //   description: "Group event booking site designed for venue management and customer booking.",
  //   role: "Group Project",
  //   category: "Academic",
  // github: "https://github.com/Thimira116/Eventro.lk",
  //   live: "https://eventro.lk/",
  //   image: EventroImg,
  //   tech: ["Bootstrap", "PHP", "CSS"],
  // },
  {
    title: "Air Ticket Booking System",
    description: "A ticket booking system with travel destination information.",
    role: "Ticket Booking System",
    category: "Academic",
    github: "https://github.com/Thimira116/Sky-Lanka-Air-Ticket-System",
    live: null,
    image: AirticketImg,
    tech: ["HTML", "PHP", "CSS"],
  },
  {
    title: "Project Management System",
    description: "A system for managing and tracking project progress and resources.",
    role: "Project Management",
    category: "Academic",
    github: "https://github.com/Thimira116/Construction_Project_Management_System",
    live: null,
    image: ConstructionImg,
    tech: ["HTML", "PHP", "CSS"],
  }
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const projectFilters = ["All", "Personal", "Academic", "Professional"];
  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="projects-page">
      <div className="projects-header">
        <div className="projects-heading">
          <p className="section-label">Selected Work</p>
          <h1 className="projects-title">Featured Projects</h1>
        </div>
        <div className="projects-count" aria-label={`${filteredProjects.length} projects shown`}>
          <span>{String(filteredProjects.length).padStart(2, "0")}</span>
          <small>Projects</small>
        </div>
      </div>

      <div className="projects-filters" role="group" aria-label="Filter projects by purpose">
        {projectFilters.map((filter) => (
          <button
            type="button"
            className={`project-filter${activeFilter === filter ? " is-active" : ""}`}
            aria-pressed={activeFilter === filter}
            key={filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-container" aria-live="polite">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <motion.div
              className="project-card"
              key={project.title}
              data-category={project.category}
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
          ))
        ) : (
          <p className="projects-empty-state">No projects in this category yet.</p>
        )}
      </div>
    </div>
  );
}

export default Projects;
