import "./about.scss";
import { useTranslation} from "react-i18next";

export default function About() {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="wrapper">
          <h1>{t("aboutme.h1")}</h1>
          <p>{t("aboutme.p")}</p>
          <a href="/assets/Resume.pdf"> {t("aboutme.a")}</a>
        </div>
      </div>
    </div>
  );
}
