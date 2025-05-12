import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <motion.section
      className="hero-section d-flex align-items-center"
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="container text-center">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="display-4 fw-bold">Hello, I'm a Frontend Developer</h1>
          <p className="lead">
            BCA Graduate | React Enthusiast | Full Stack Developer in Progress
          </p>
          <a href="#contact" className="btn btn-primary mt-3">
            Get In Touch
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
