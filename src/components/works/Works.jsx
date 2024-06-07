import "./works.scss";
import { useTranslation } from "react-i18next";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Works() {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="works" id="works">
      
      <h1 className="title">{t("works.tittle")}</h1>

      <div class="row row-cols-1 row-cols-md-3 g-3 justify-content-center">
        <div class="col">
          <div className="card">
            <img
              src="/assets/works/works1.png"
              className="bd-placeholder-img card-img-top"
              alt="git Logo"
            />
            <h5 class="card-title">{t("works.schedule.h5")}</h5>
            <p class="card-text">{t("works.schedule.p")}</p>
            <div class="button d-flex justify-content-center">
              <a class="btn btn-primary mx-2" href="https://github.com/JuaniGianfelice/guard-schedule" role="button">Github</a>
              <a class="btn btn-primary mx-2" href="https://calendarguard.vercel.app/" role="button">Demo</a>
            </div>

          </div>
        </div>
        <div class="col">
          <div className="card">
            <img
              src="/assets/works/works6.png"
              className="bd-placeholder-img card-img-top"
              alt="git Logo"
            />
            <h5 class="card-title">{t("works.verdefresco.h5")}</h5>
            <p class="card-text">{t("works.verdefresco.p")}</p>
            <div class="button d-flex justify-content-center">
              <a class="btn btn-primary mx-2" href="https://github.com/JuaniGianfelice/verde-fresco" role="button">Github</a>
              <a class="btn btn-primary mx-2" href="https://verde-fresco.vercel.app/" role="button">Web</a>
            </div>


          </div>
        </div>
        <div class="col">
          <div className="card">
            <img
              src="/assets/works/works2.png"
              className="bd-placeholder-img card-img-top"
              alt="git Logo"
            />
            <h5 class="card-title">Loretta Web</h5>
            <p class="card-text">{t("works.loretta.p")}</p>
            <div class="button d-flex justify-content-center">
              <a class="btn btn-primary mx-2" href="https://github.com/JuaniGianfelice/loretta-webside" role="button">Github</a>
              <a class="btn btn-primary mx-2" href="https://lorettaband.vercel.app/" role="button">Web</a>
            </div>


          </div>
        </div>
        {/*<div class="col">
          <div className="card">
          <img
              src="/assets/works/works3.png"
              className="bd-placeholder-img card-img-top"
              alt="git Logo"
            />
            <h5 class="card-title">{t("works.ecommerce.h5")}</h5>
            <p class="card-text">{t("works.ecommerce.p")}</p>
            <div class="button d-flex justify-content-center">
              <a class="btn btn-primary mx-2" href="https://github.com/JuaniGianfelice/ecommerce-react" role="button">Github</a>
              <a class="btn btn-primary mx-2" href="/not" role="button">Demo</a>
            </div>


          </div>
        </div>*/}
        <div class="col">
          <div className="card">
            <img
              src="/assets/works/works4.png"
              className="bd-placeholder-img card-img-top"
              alt="git Logo"
            />
            <h5 class="card-title">{t("works.todo.h5")}</h5>
            <p class="card-text">{t("works.todo.p")}</p>
            <div class="button d-flex justify-content-center">
              <a class="btn btn-primary mx-2" href="https://github.com/JuaniGianfelice/todo-list" role="button">Github</a>
              <a class="btn btn-primary mx-2" href="https://todo-list-gianfelice.vercel.app/" role="button">Web</a>
            </div>


          </div>
        </div>
        <div class="col">
          <div className="card">
            <img
              src="/assets/works/works5.png"
              className="bd-placeholder-img card-img-top"
              alt="git Logo"
            />
            <h5 class="card-title">{t("works.weatherapp.h5")}</h5>
            <p class="card-text">{t("works.weatherapp.p")}</p>
            <div class="button d-flex justify-content-center">
              <a class="btn btn-primary mx-2" href="https://github.com/JuaniGianfelice/weather-app" role="button">Github</a>
              <a class="btn btn-primary mx-2" href="https://gianfelice-weatherapp.vercel.app/" role="button">Web</a>
            </div>


          </div>
        </div>
        <div class="col">
          <div className="card">
            <img
              src="/assets/works/works7.png"
              className="bd-placeholder-img card-img-top"
              alt="img"
            />
            <h5 class="card-title">{t("works.usergenerator.h5")}</h5>
            <p class="card-text">{t("works.usergenerator.p")}</p>
            <div class="button d-flex justify-content-center">
              <a class="btn btn-primary mx-2" href="https://github.com/JuaniGianfelice/user-generator" role="button">Github</a>
              <a class="btn btn-primary mx-2" href="https://usergenerator.vercel.app/" role="button">Web</a>
            </div>


          </div>
        </div>

      </div>

    </div>
  );
}
