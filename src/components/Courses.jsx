import React from "react";
import { motion } from "framer-motion";
import "./Courses.css";

const Courses = () => {
  return (
    <section className="courses-section py-5" id="courses">
      <div className="container">
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          📚 Courses:
        </motion.h2>

        <motion.div
          className="course-info mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p> Full Stack Development Course:</p>
          <p className="course-provider text-center text-muted">
            Red & White Institute
          </p>
          <p className="course-date text-center">June 2024 – Present</p>

          <p className="course-description text-center mt-4">
            This 15-month program offers a comprehensive curriculum that
            includes:
            <ul>
              <li>Frontend: HTML5, CSS3, Bootstrap, JavaScript, React.js</li>
              <li>Backend: Node.js, Express.js, MongoDB, Firebase</li>
              <li>Real-world projects & portfolio development</li>
              <li>Taught by industry experts with hands-on experience</li>
            </ul>
          </p>
        </motion.div>

        <motion.div
          className="faculty-info"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h5 className="text-center mb-4">Meet Faculty</h5>

          <div className="row">
            <motion.div
              className="col-md-6 mb-4"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="faculty-card">
                <h6 className="faculty-name">👨‍🏫 Arpit Kanasara</h6>
                <p className="faculty-role">Frontend Faculty</p>
                <p className="faculty-description">
                  Arpit Kanasara is a Senior Technical Trainer at Red & White
                  Multimedia Education, with expertise in various technologies.
                  He previously worked as a Technical Trainer at TOPS
                  Technologies Pvt. Ltd and a Senior Lecturer at SKIT.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="col-md-6 mb-4"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="faculty-card">
                <h6 className="faculty-name">👨‍🏫 Diwaker Sharma</h6>
                <p className="faculty-role">Backend Faculty</p>
                <p className="faculty-description">
                  Diwaker Sharma is a Full Stack Developer/Trainer at Red &
                  White Institute, specializing in Node.js, Express.js, and
                  MongoDB. He has interned at Masai School and MarkeTax, gaining
                  hands-on experience in building scalable web applications.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
