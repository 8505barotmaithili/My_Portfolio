import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        className="footer-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="footer-title">Maithili Brahmbhatt</h3>
        <ul className="footer-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="footer-socials">
          <a
            href="https://github.com/8505barotmaithili"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/brahmbhatt-maithili-017113313"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="8505barotmaithili@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Maithili. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
