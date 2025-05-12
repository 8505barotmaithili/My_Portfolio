import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <section className="about-section py-5" id="about">
      <div className="container">
        <motion.h2
          className="text-center mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="lead text-center mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          I am a BCA graduate currently pursuing a Full Stack Developer course
          at Red & White Institute. With a solid foundation in front-end
          development, I have completed the frontend module and actively work on
          various real-world projects to strengthen my skills. I have hands-on
          experience with technologies such as HTML, CSS, Bootstrap, and React,
          and I am passionate about creating responsive, user-friendly web
          applications. Eager to grow as a full stack developer, I continuously
          explore backend technologies and strive to build complete, efficient,
          and scalable web solutions.
        </motion.p>

        {/* Education Timeline Section */}
        <motion.div
          className="education-section-timeline"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-center mb-4">Education</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h5>🎓 Bachelor's Degree in Computer Applications</h5>
                <p className="institute">
                  Veer Narmad South Gujarat University (VNSGU), Surat
                </p>
                <p className="details">
                  Jul 2022 – Jun 2025 | Grade: 8.22 CGPA
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h5>🏫 Higher Secondary Education (HSC)</h5>
                <p className="institute">Sungrace School</p>
                <p className="details">Jul 2020 – Mar 2022 | Grade: 86%</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h5>🏫 Secondary Education (SSC)</h5>
                <p className="institute">Sungrace School</p>
                <p className="details">Jun 2008 – Mar 2020 | Grade: 80%</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
