import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { useTranslation} from "react-i18next";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Intro() {
  const textRef = useRef();
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web Developer", "Designer", "Content Creator"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="wrapper">
          <h2>{t("intro.h2")}</h2>
          <h1>Juan I. Gianfelice</h1>
          <h3> Freelance <span ref={textRef}></span> </h3>
          <div className="socials">
          <div className="logos">
            <a
              href="https://github.com/JuaniGianfelice"
              rel="noreferrer"
              target="_blank"
            >
              <GitHubIcon className="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/gianfelicejuanignacio1998/"
              rel="noreferrer"
              target="_blank"
            >
              <LinkedInIcon className="linkedin" />
            </a>
            <a
              href="https://www.instagram.com/juanigianfelice/"
              rel="noreferrer"
              target="_blank"
            >
              <InstagramIcon className="instagram" />
            </a>
          </div>
        </div>
        </div>
      </div>
      <div className="right">
      <img src="assets/profile.png" alt="profile" />

      </div>
    </div>
  );
}
