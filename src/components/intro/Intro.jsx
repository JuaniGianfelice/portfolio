import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { useTranslation} from "react-i18next";

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
          <h1>Juan Ignacio Gianfelice</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src="assets/profile.png" alt="" />
        </div>
      </div>
    </div>
  );
}
