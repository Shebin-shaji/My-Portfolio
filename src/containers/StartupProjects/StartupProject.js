import React, { useContext } from "react";
import "./StartupProjects.scss";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) return;
    var win = window.open(url, "_blank");
    win.focus();
  }

  const { isDark } = useContext(StyleContext);
  if (!bigProjects.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <h1 className="skills-heading">{bigProjects.title}</h1>
        <p className={isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"}>
          {bigProjects.subtitle}
        </p>

        <div className="big-projects-container">
          {bigProjects.projects.map((project, i) => (
            <div className="big-project-card" key={i}>
              {/* ── LEFT CONTENT ── */}
              <div className="big-project-left">
                {/* Title + description */}
                <div className="big-project-header">
                  <h2 className="big-project-name">{project.projectName}</h2>
                  <p className="big-project-desc">{project.projectDesc}</p>
                </div>

                {/* Tech stack */}
                {project.techStack && (
                  <div className="big-project-tech">
                    <span className="tech-label">Tech Used</span>
                    <div className="tech-list">
                      {project.techStack.map((tech, idx) => (
                        <React.Fragment key={idx}>
                          <span className="tech-item">{tech}</span>
                          {idx < project.techStack.length - 1 && (
                            <span className="tech-divider" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA buttons */}
                {project.footerLink && (
                  <div className="big-project-buttons">
                    {project.footerLink.map((link, idx) => (
                      <button
                        key={idx}
                        className={`cta-btn ${idx === 0 ? "cta-dark" : "cta-light"}`}
                        onClick={() => openUrlInNewTab(link.url)}
                      >
                        {link.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* ── RIGHT MOCKUPS ── */}
              {project.mockups && (
                <div className="big-project-mockups">
                  {project.mockups.map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt={`${project.projectName} mockup ${idx + 1}`}
                      className={`mockup-img mockup-${idx}`}
                    />
                  ))}
                </div>
              )}

              {/* Fallback: single image */}
              {!project.mockups && project.image && (
                <div className="big-project-mockups">
                  <img
                    src={project.image}
                    alt={project.projectName}
                    className="mockup-img mockup-1"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}