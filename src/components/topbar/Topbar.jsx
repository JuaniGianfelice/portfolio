import './topbar.scss';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from 'react-i18next';

export default function Topbar({ menuOpen, setMenuOpen }) {
    const [t, i18n] = useTranslation("global");
    return (
        <div className={'topbar ' + (menuOpen && 'active') }>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>J|G</a>
                    <div className="itemContainer">
                        <EmailIcon className='icon' />
                        <span>juani.gianfelice@gmail.com</span>
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