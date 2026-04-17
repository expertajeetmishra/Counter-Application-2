import React from "react";
import "./Home.css";

const HomePage = () => {
  return (
    <div className="home">
      <nav className="navbar">
        <h2 className="logo"></h2>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <h1>Hello, I'm <span>Ajeet Mishra</span></h1>
          <p>Technical Trainer </p>
          <a href="#projects" className="btn">View My Work</a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;