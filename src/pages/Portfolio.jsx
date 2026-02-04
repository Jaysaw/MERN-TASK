import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>JAY SAW</h1>
        <p>Full-Stack Developer | MERN Enthusiast | Problem Solver</p>
      </section>

      {/* About Me */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          Hello! I am a passionate MERN stack developer with experience building
          full-stack applications, creating reusable components, and solving
          complex problems. I enjoy learning new technologies and implementing
          them in practical projects.
        </p>
      </section>

      {/* Skills */}
      <section className="skills">
        <h2>Skills</h2>
        <div className="skill-list">
          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>JavaScript</span>
          <span>HTML/CSS</span>
          <span>Git & GitHub</span>
        </div>
      </section>

      {/* Projects */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-cards">
          <div className="project-card">
            <h3>Multi-Utility MERN</h3>
            <p>A full-stack project featuring 11 utilities like Todo, BMI, Weather, etc.</p>
          </div>
          <div className="project-card">
            <h3>Real-Time Chat App</h3>
            <p>Built using React, Node, Express, and Socket.io for real-time communication.</p>
          </div>
          <div className="project-card">
            <h3>Online Portfolio</h3>
            <p>Personal portfolio website built using React and styled-components.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact">
        <h2>Contact</h2>
        <p>Email: jay.saw@example.com</p>
        <p>Phone: +91 12345 67890</p>
        <div className="contact-buttons">
          <a href="mailto:jay.saw@example.com" className="btn">Email Me</a>
          <a href="https://github.com/jaysaw" target="_blank" className="btn">GitHub</a>
          <a href="https://www.linkedin.com/in/jaysaw" target="_blank" className="btn">LinkedIn</a>
        </div>
      </section>
    </div>
  );
}
