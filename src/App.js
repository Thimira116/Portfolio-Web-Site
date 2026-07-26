import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
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
            <main className="home-page">
              <section className="hero-section">
                <div className="hero-copy">
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="hero-label"
                  >
                    Full-stack Developer
                  </motion.span>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.7 }}
                    className="hero-title"
                  >
                    Building polished websites with dependable backend systems.
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="hero-description"
                  >
                    I build data-driven web apps with PHP, MySQL, and React,
                    while applying QA practices to keep every release clean and reliable.
                    Open to internships and freelance projects that need strong web logic,
                    responsive design, and test-ready delivery.
                  </motion.p>

                  <div className="hero-actions">
                    <Link to="/projects" className="primary-button">
                      View Projects
                    </Link>
                    <Link to="/contact" className="secondary-button">
                      Contact Me
                    </Link>
                  </div>
                </div>

                <motion.div
                  className="hero-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                >
                  <p className="hero-card-title">Hi, I'm Thimira | Open to Internships</p>
                  <p className="hero-card-text">
                    I create modern, accessible websites that run smoothly on mobile,
                    connect cleanly to databases, and are built with quality in mind.
                  </p>
                </motion.div>
              </section>

              <section className="hero-highlights">
                <motion.div
                  className="highlight-card"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                >
                  <span>Web Applications</span>
                  <h3>Responsive UI & layouts</h3>
                  <p>Designing interfaces that look good and perform well across devices.</p>
                </motion.div>
                <motion.div
                  className="highlight-card"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                >
                  <span>Backend Systems</span>
                  <h3>PHP, MySQL, Python</h3>
                  <p>Building database-backed solutions with reliable business logic and clean data flow.</p>
                </motion.div>
                <motion.div
                  className="highlight-card"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                >
                  <span>Quality Focus</span>
                  <h3>QA-ready delivery</h3>
                  <p>Testing code and user journeys so final products are polished and stable.</p>
                </motion.div>
              </section>

              <section className="feature-section">
                <div className="feature-card">
                  <h3>Responsive by Design</h3>
                  <p>
                    Every page adapts beautifully across desktop, tablet, and mobile.
                  </p>
                </div>
                <div className="feature-card">
                  <h3>Fast & Clean Code</h3>
                  <p>
                    I focus on performance, maintainability, and scalable architecture.
                  </p>
                </div>
                <div className="feature-card">
                  <h3>Real Internship Ready</h3>
                  <p>
                    Professional design, polished interactions, and clear project delivery.
                  </p>
                </div>
              </section>
            </main>
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
