import './menu.scss'
import { useTranslation } from 'react-i18next';

export default function Menu({ menuOpen, setMenuOpen }) {
    const [t, i18n] = useTranslation("global");
    return (
        <div className={'menu ' + (menuOpen && 'active')}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#home">{t("menu.home")}</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#about">{t("menu.about")}</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#skills">{t("menu.skills")}</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#works">{t("menu.works")}</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">{t("menu.contact")}</a>
                </li>
            </ul>
        </div>
    )
}