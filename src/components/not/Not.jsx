import "./not.scss";
import { useTranslation } from "react-i18next";

export default function Not() {
    const [t, i18n] = useTranslation("global");
    console.log(i18n.language);
    return (
        <div className="not" id="not">
            <div className="wrapped">
                <h1>{t("not.h1")}</h1>
                <p>{t("not.p")}</p>
            </div>
        </div>
    );
}