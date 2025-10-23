import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="welcome-container">
                <motion.h1
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="welcome-title"
                >
                  👋 Welcome to My Portfolio
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="welcome-text"
                >
                  Explore my work, skills, and projects that showcase my journey
                  as a developer. Let’s build something amazing together!
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                  className="welcome-button"
                >
                  View My Work
                </motion.button>
              </div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </HashRouter>
  );
}

export default App;
