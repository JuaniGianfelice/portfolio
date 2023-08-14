import "./about.scss";
import { useTranslation} from "react-i18next";

export default function About() {
  const [t, i18n] = useTranslation("global");
  const PDF = () => {
    const routePDF = "/assets/Resume.pdf";
    window.open(routePDF, "_blank");
  }
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="wrapper">
          <h1>{t("aboutme.h1")}</h1>
          <p>{t("aboutme.p")}</p>
          <a className="button" onClick={PDF}> {t("aboutme.a")}</a>
        </div>
      </div>
    </div>
  );
}
