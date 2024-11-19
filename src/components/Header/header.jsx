import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
import logo from "../../assets/borapescar2.png";
import './header.css'

const toggleTheme = () => {
    const root = document.documentElement;
    if (root.getAttribute("theme") === "high-contrast") {
      root.setAttribute("theme", "normal-contrast");
    } else {
      root.setAttribute("theme", "high-contrast");
    }
};

const adjustFontSize = (action) => {
    const root = document.documentElement;
    const currentSize = root.getAttribute("font-size") || "small";
  
    let newSize;
    if (action === "increase") {
      newSize = currentSize === "small" ? "medium" : "large";
    } else if (action === "decrease") {
      newSize = currentSize === "large" ? "medium" : "small";
    }
  
    root.setAttribute("font-size", newSize);
};
  
const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Logo do Bora Pescar" />
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Página Inicial</Link>
                    </li>
                    <li>
                        Quem somos
                    </li>
                    <li>
                        Anuncie Conosco
                    </li>
                    <li>
                        Blog
                    </li>
                    <li>
                        <Link to="/contact">Contato</Link>
                    </li>
                </ul>
            </nav>
            <div className="accessibilityButtons">
                <button onClick={toggleTheme}><FontAwesomeIcon icon={faCircleHalfStroke} /></button>
                <button onClick={() => adjustFontSize("increase")}>A+</button>
                <button onClick={() => adjustFontSize("decrease")}>A-</button>
            </div>
        </header>
    );
};

export default Header;