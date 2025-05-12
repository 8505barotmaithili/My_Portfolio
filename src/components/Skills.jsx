import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

// Skill icons can be imported from libraries like FontAwesome, React Icons, or custom SVGs.
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaFire,
  FaCode,
} from "react-icons/fa";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={40} /> },
  { name: "CSS", icon: <FaCss3Alt size={40} /> },
  { name: "Bootstrap", icon: <FaBootstrap size={40} /> },
  { name: "JavaScript", icon: <FaJsSquare size={40} /> },
  { name: "React", icon: <FaReact size={40} /> },
  { name: "Jquery", icon: <FaCode size={40} /> },
  { name: "Firebase", icon: <FaFire size={40} /> },
];

const Skills = () => {
  return (
    <section className="skills-section py-5" id="skills">
      <div className="container text-center">
        <motion.h2
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Skills
        </motion.h2>
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="col-md-2 m-2 p-3 skill-item"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h5>{skill.name}</h5>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
