import React from "react";
import { motion } from "framer-motion";
import "./App.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React.js and CSS.",
    link: "https://github.com/Thimira116/Portfolio-Web-Site",
  },
  {
    title: "Travel Management Website",
    description: "An online travel giude website built using HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL.",
    link: "https://github.com/Thimira116/Lakvisit-Travelling-Web-Site",
  },
  {
    title: "Mr Cushion Website",
    description: "A website with booking and user feedbacks website built using HTML, CSS, Java Script, PHP and My SQL.",
    link: "https://github.com/Thimira116/mr_cushion",
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
            <h2 className="project-card-title">{project.title}</h2>
            <p className="project-card-desc">{project.description}</p>
            <a href={project.link} className="project-card-link">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
