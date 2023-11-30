import React, { useState } from "react";
import headerlogo from "../assets/img/headerlogo__.png";
import { headerNav } from "../constants";

const Header = () => {
    const [show, setShow] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    }
    const handleClick = () => {
        setIsActive(!isActive);
    }
    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="header__logo">
                        <a href="/"><img src={headerlogo} alt="로고"/></a>
                </div>
                <nav 
                    className={`header__nav ${show ? "show" : ""}`} 
                    role="navigation" 
                    aria-label="메인메뉴"
                >
                    <ul>
                        {headerNav.map((nav, key) => (
                            <li key={key}>
                                <a href={nav.url}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div 
                    className="header__nav__mobile" 
                    id="headerToggle" 
                    aria-controls="primary-menu" 
                    aria-expanded={show ? "true" : "false"} 
                    role="button"
                    tabIndex="0"
                    onClick={toggleMenu}
                >                  
                </div>
                <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={handleClick}>
                   <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                   </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;