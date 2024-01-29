import './topbar.scss';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Email';
import { useTranslation } from 'react-i18next';

export default function Topbar({ menuOpen, setMenuOpen }) {
    const [t, i18n] = useTranslation("global");
    return (
        <div className={'topbar ' + (menuOpen && 'active') }>
            <div className="wrapper">
                <div className="left">
                    <a href="/" className='logo'>J|G</a>
                </div>
                <div className='center'>
                    <div className="itemContainer">
                        <a href="/"><HomeIcon className='icon'/> {t("menu.home")}</a>
                        <a href="/skills"><CodeIcon className='icon'/> {t("menu.skills")}</a>
                        <a href="/works"><WorkIcon className='icon'/> {t("menu.works")}</a>
                        <a href="/contact"><MailIcon className='icon'/> {t("menu.contact")}</a>
                    </div>
                </div>
                <div className="right">
                    <div className='language'>
                        <button onClick={() => i18n.changeLanguage("es")}>ES</button>
                        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
                    </div>
                    <div className="options" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}