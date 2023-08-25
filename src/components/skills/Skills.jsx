import "./skills.scss";
import { useTranslation} from "react-i18next";

export default function Skills() {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="skills" id="skills">
      <div className="back"></div>
      <div className="container">
        <h1>{t("skills.h1")}</h1>
        <img src="assets/skills.png" alt="skill" />

       
        
      </div>
    </div>
  );
}
