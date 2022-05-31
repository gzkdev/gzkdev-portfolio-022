import Link from "next/link";
import styles from "../styles/ProjectsSection.module.css";
import { ProjectsData } from "./AppData";

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <span className={styles.projects__title}>Projects</span>
        <div className={styles.projects__container}>
          {ProjectsData.map((project, index) => (
            <div key={index} className={styles.projects__item}>
              <div>
                <h4>{project.name}</h4>
                <p>{project.description}</p>
              </div>
              <div className={styles.projects__item__footer}>
                <a
                  className={styles.projects__item__link}
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
                <a
                  href={project.repo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Code
                </a>
              </div>
            </div>
          ))}
        </div>
        <Link href="/projects">
          <a className={styles.projects__cta}>Projects Archive</a>
        </Link>
      </div>
    </section>
  );
}
