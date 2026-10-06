import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { config } from "../config";
import ProjectModal from "../components/ProjectModal";
import "./MyWorks.css";

interface Project {
  id: number;
  title: string;
  category: string;
  technologies: string | string[];
  image: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
  youtubeLink?: string;
}

const MyWorks = () => {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = "auto";
    document.body.style.overflowY = "auto";

    return () => {
      document.body.style.overflow = "hidden";
      document.body.style.overflowY = "hidden";
    };
  }, []);

  return (
    <div className="myworks-page">
      <div className="myworks-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>

        <h1>
          My <span>Projects</span>
        </h1>

        <p>
          A collection of projects I have built while learning and
          improving my development skills.
        </p>
      </div>

      <div className="myworks-grid">
        {config.projects.map((project, index) => (
          <div
            className="myworks-card"
            key={project.id}
            data-cursor="disable"
            onClick={() => setSelectedProject(project)}
            style={{ cursor: "pointer" }}
          >
            <div className="myworks-card-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="myworks-card-image">
              <img
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="myworks-card-info">
              <h3>{project.title}</h3>

              <p className="myworks-card-category">
                {project.category}
              </p>

              <p className="myworks-card-description">
                {project.description}
              </p>

              <p className="myworks-card-tech">
                {Array.isArray(project.technologies)
                  ? project.technologies.join(" • ")
                  : project.technologies}
              </p>

              {project.githubLink && (
                <div
                  className="myworks-card-links"
                  onClick={(e) => e.stopPropagation()}
                >
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github-link"
                    title="View GitHub Repository"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          startWithVideo={false}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default MyWorks;