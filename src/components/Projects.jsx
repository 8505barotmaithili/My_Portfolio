import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio using React, Bootstrap, and Framer Motion.",
    link: "https://grand-stardust-d46dcc.netlify.app/",
    image: "/assets/Screenshot 2025-05-10 201330.png",
  },
  {
    title: "Flipkart Website",
    description: "A clone of the popular e-commerce site Flipkart.",
    link: "https://flipkart-front-zeta.vercel.app/",
    image: "/assets/Screenshot 2025-05-10 201207.png",
  },
  {
    title: "Myntra Website",
    description: "A clone of the Myntra e-commerce platform.",
    link: "https://magnificent-clafoutis-3d59d7.netlify.app/",
    image: "/assets/Screenshot 2025-05-10 202130.png",
  },
  {
    title: "Bankdash Panel",
    description: "A simple dashboard for bank management.",
    link: "https://resonant-kashata-c6917c.netlify.app/",
    image: "/assets/Screenshot 2025-05-10 215008.png",
  },
  {
    title: "Charity Website",
    description:
      "A website for charity organization showcasing donation features.",
    link: "https://curious-axolotl-4df05c.netlify.app/",
    image: "/assets/Screenshot 2025-05-10 215123.png",
  },
  {
    title: "Quick Start",
    description: "A quick-start application to kick off projects.",
    link: "https://wondrous-marzipan-9866ce.netlify.app/",
    image: "/assets/Screenshot 2025-05-10 215240.png",
  },
  {
    title: "Happenstance Website",
    description: "A Happenstance website showcasing projects and achievements.",
    link: "https://chipper-starlight-4c5429.netlify.app/",
    image: "/assets/Screenshot 2025-05-10 215422.png",
  },
];

const Projects = () => {
  return (
    <section className="projects-section py-5" id="projects">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card shadow">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
