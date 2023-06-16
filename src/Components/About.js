import style from "./About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Card from "../UI/Card";

const AboutPage = () => {
  return (
    <>
      <div className={style.card}>
        <Card>
          <h1 className={style.title}>About me</h1>
          <p className={style.description}>
            I am currently a student, who is passionate about software
            development. I have developed this website as I want to build a
            portfolio to showcase my work. While the website may feel a bit too
            plain, this is my first project so I wanted to keep it short and
            focus on the React elements of the website rather than CSS. As I get
            faster and better at React applications, I plan to give this and
            other websites a better look.
          </p>
          <h3 className={style.socialTitle}>Other projects</h3>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className={style.iconLink}
          >
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className={style.icon}
            />
            <span className={style.iconText}>Placeholder</span>
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className={style.iconLink}
          >
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className={style.icon}
            />
            <span className={style.iconText}>Placeholder</span>
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className={style.iconLink}
          >
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className={style.icon}
            />
            <span className={style.iconText}>Placeholder</span>
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className={style.iconLink}
          >
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className={style.icon}
            />
            <span className={style.iconText}>Placeholder</span>
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className={style.iconLink}
          >
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className={style.icon}
            />
            <span className={style.iconText}>Placeholder</span>
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className={style.iconLink}
          >
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className={style.icon}
            />
            <span className={style.iconText}>Placeholder</span>
          </a>
          <h3 className={style.socialTitle}>Socials</h3>
          <div className={style.socialIcons}>
            <a
              href="https://www.linkedin.com/in/karthik-ram-3301/"
              target="_blank"
              rel="noopener noreferrer"
              className={style.iconLink}
            >
              <FontAwesomeIcon icon={faLinkedin} className={style.icon} />
              <span className={style.iconText}>LinkedIn</span>
            </a>
            <a
              href="https://github.com/karthik-re"
              className={style.iconLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className={style.icon} />
              <span className={style.iconText}>GitHub</span>
            </a>
          </div>
        </Card>
      </div>
    </>
  );
};

export default AboutPage;
