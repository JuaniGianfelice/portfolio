import "./skills.scss";
import { useTranslation } from "react-i18next";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Skills() {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="skills" id="skills">
      

        <h1>{t("skills.h1a")}</h1>
        <div class="row row-cols-1 row-cols-md-5 g-4">
          <div class="col">
            <div className="card">
              <img
                src="/assets/skills/html-logo.png"
                className="bd-placeholder-img card-img-top"
                alt="HTML Logo"
              />
              <h5 class="card-title">HTML</h5>
            </div>
          </div>
          <div class="col">
            <div class="card align-items-center">
              <img
                src="/assets/skills/css-logo.png"
                className="bd-placeholder-img card-img-top"
                alt="HTML Logo"
              />
              <h5 class="card-title">CSS</h5>
            </div>
          </div>
          <div class="col">
            <div class="card align-items-center">
              <img
                src="/assets/skills/sass-logo.png"
                className="bd-placeholder-img card-img-top"
                alt="HTML Logo"
              />
              <h5 class="card-title">SASS</h5>
            </div>
          </div>
          <div class="col">
            <div class="card align-items-center">
              <img
                src="/assets/skills/bootstrap-logo.png"
                className="bd-placeholder-img card-img-top"
                alt="HTML Logo"
              />
              <h5 class="card-title">Bootstrap</h5>
            </div>
          </div>
          <div class="col">
            <div class="card align-items-center">
              <img
                src="/assets/skills/javascript-logo.png"
                className="bd-placeholder-img card-img-top"
                alt="HTML Logo"
              />
              <h5 class="card-title">Java Script</h5>
            </div>
          </div>
          <div class="col">
            <div class="card align-items-center">
              <img
                src="/assets/skills/react-logo.png"
                className="bd-placeholder-img card-img-top"
                alt="HTML Logo"
              />
              <h5 class="card-title">React</h5>
            </div>
          </div>
          <div class="col">
            <div class="card align-items-center">
              <img
                src="/assets/skills/redux-logo.png"
                className="bd-placeholder-img card-img-top"
                alt="HTML Logo"
              />
              <h5 class="card-title">Redux</h5>
            </div>
          </div>
          <div class="col">
            <div class="card align-items-center">
              <img
                src="/assets/skills/node-logo.png"
                className="bd-placeholder-img card-img-top"
                alt="HTML Logo"
              />
              <h5 class="card-title">Node.js</h5>
            </div>
          </div>
          <div class="col">
            <div class="card align-items-center">
              <img
                src="/assets/skills/express-logo.png"
                className="bd-placeholder-img card-img-top"
                alt="HTML Logo"
              />
              <h5 class="card-title">Express.js</h5>
            </div>
          </div>
          <div class="col">
            <div class="card align-items-center">
              <img
                src="/assets/skills/mongodb-logo.png"
                className="bd-placeholder-img card-img-top"
                alt="HTML Logo"
              />
              <h5 class="card-title">MongoDB</h5>
            </div>
          </div>
          
        </div>

        <h1>{t("skills.h1b")}</h1>
        <div class="row row-cols-1 row-cols-md-5 g-4 justify-content-center">
          <div class="col">
            <div className="card">
              <img
                src="/assets/skills/github-logo.png"
                className="bd-placeholder-img card-img-top"
                alt="git Logo"
              />
              <h5 class="card-title">GIT</h5>
            </div>
          </div>
          <div class="col">
            <div class="card align-items-center">
              <img
                src="/assets/skills/vsc-logo.png"
                className="bd-placeholder-img card-img-top"
                alt="visual studio code Logo"
              />
              <h5 class="card-title">VSC</h5>
            </div>
          </div>
          <div class="col">
            <div class="card align-items-center">
              <img
                src="/assets/skills/figma-logo.png"
                className="bd-placeholder-img card-img-top"
                alt="figma Logo"
              />
              <h5 class="card-title">Figma</h5>
            </div>
          </div>
          <div class="col">
            <div class="card align-items-center">
              <img
                src="/assets/skills/photoshop-logo.png"
                className="bd-placeholder-img card-img-top"
                alt="photoshop Logo"
              />
              <h5 class="card-title">Photoshop</h5>
            </div>
          </div>
        </div>
      

    </div>
  );
}
