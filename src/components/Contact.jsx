import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.h2
          className="contact-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>
        <motion.form
          className="contact-form"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <input
            type="text"
            className="contact-input"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            className="contact-input"
            placeholder="Your Email"
            required
          />
          <textarea
            className="contact-textarea"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <motion.button
            type="submit"
            className="contact-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
