import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Courses from "./components/Courses";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Courses />
      <Projects />
      <Contact />
      <Footer />
    </Router>
  );
};

export default App;
