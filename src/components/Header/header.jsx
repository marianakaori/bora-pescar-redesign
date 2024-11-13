import { Link } from "react-router-dom";
import logo from "../../assets/borapescar2.png";
import './header.css'



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
        </header>
    );
};

export default Header;