import "./home.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Home() {
  const textRef = useRef();
  const [t, i18n] = useTranslation("global");
  const PDF = () => {
    const routePDF = "/assets/Resume.pdf";
    window.open(routePDF, "_blank");
  }

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Software Developer", "MERN Stack Developer", "Freelancer"],
    });
  }, []);

  return (
    <div className="home" id="home">
      <div className="intro">
        <div className="left">
          <div className="wrapper">
            <h2>{t("home.h2")}</h2>
            <h1>Juan I. Gianfelice</h1>
            <h3> <span ref={textRef}></span> </h3>
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
                  href="https://www.linkedin.com/in/gianfelicejuan/"
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
      <div className="about" >
        <h1>{t("aboutme.h1")}</h1>
        <p>{t("aboutme.p")}</p>
        <button onClick={PDF}>{t("aboutme.a")}</button>
      </div>

    </div>

  );
}
