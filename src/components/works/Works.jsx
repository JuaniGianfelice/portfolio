import "./works.scss";
import { useTranslation} from "react-i18next";

//Armar en un futuro esta seccion como si fuese un carrusel

export default function Works() {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="works" id="works">
      <h1 className="title">{t("works.tittle")}</h1>
      <div className="cards">
        <div className="card">
          <div className="content">
            <h2>Loretta</h2>
            <h3>{t("works.loretta.h3")}</h3>
            <p>{t("works.loretta.p")}</p>
            <a href="">{t("works.loretta.a")}</a>
          </div>
          <img src="/assets/works1.png" alt="" />
          <h1 className="special">Loretta</h1>
        </div>

        <div className="card">
          <div className="content">
            <h2>Ecommerce</h2>
            <h3>{t("works.ecommerce.h3")}</h3>
            <p>{t("works.ecommerce.p")}</p>
            <a href="">{t("works.ecommerce.a")}</a>
          </div>
          <img src="/assets/works2.png" alt="" />
          <h1>Ecommerce</h1>
        </div>

        <div className="card">
          <div className="content">
            <h2>{t("works.comingsoon.a")}</h2>
            <h3>{t("works.comingsoon.h3")}</h3>
            <p>{t("works.comingsoon.p")}</p>
            <a href="#">{t("works.comingsoon.a")}</a>
          </div>
          <img src="/assets/works3.png" alt="" />
          <h1>{t("works.comingsoon.a")}</h1>
        </div>
      </div>
    </div>
  );
}
