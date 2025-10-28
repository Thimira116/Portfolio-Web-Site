import React from "react";
import { motion } from "framer-motion";
import "./App.css";
import PortfolioImg from "./assets/Portfolio.png";
import LakvisitImg from "./assets/Lakvisit.png";
import MrCushionImg from "./assets/MrCushion.png";


const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React.js and CSS.",
    link: "https://github.com/Thimira116/Portfolio-Web-Site",
    image: PortfolioImg,
  },
  {
    title: "Travel Management Website",
    description: "An online travel giude website built using HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL.",
    link: "https://github.com/Thimira116/Lakvisit-Travelling-Web-Site",
    image: LakvisitImg,
  },
  {
    title: "Mr Cushion Website",
    description: "A website with booking and user feedbacks website built using HTML, CSS, Java Script, PHP and My SQL.",
    link: "https://github.com/Thimira116/mr_cushion",
    image: MrCushionImg,
  },
  // Add more projects here
];

function Projects() {
  return (
    <div className="projects-page">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
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
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link"
              >
                View
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
