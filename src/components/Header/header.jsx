import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
import logo from "/images/borapescar2.png";
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
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Logo do Bora Pescar" />
                </Link>
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
            <nav className={`menu ${isOpen ? "open" : ""}`}>
                <button className={`menu-close ${isOpen ? "open" : ""}`} onClick={closeMenu}>
                ✖
                </button>
                <ul>
                    <li>
                        <Link to="/">Página Inicial</Link>
                    </li>
                    <li>
                    <Link to="#">Quem somos</Link>
                    </li>
                    <li>
                        <Link to="#">Anuncie Conosco</Link>
                    </li>
                    <li>
                        <Link to="#">Blog</Link>
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