import { useLocation } from 'react-router-dom';

//CSS import
import './style.css';

//Img imports
import logo from '../../assets/imgs/logo.png'

export const Header = () => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <div className="headerContainer">
            <img src={logo} />
            <div className="linksContainer">
                <a href="/food" className={path == "/food" ? "highlighted" : ""}>FOODS</a>
                <a href="/people" className={path == "/people" ? "highlighted" : ""}>PEOPLE</a>
                <a href="/places" className={path == "/places" ? "highlighted" : ""}>PLACES</a>
            </div>
        </div>
    );
};
