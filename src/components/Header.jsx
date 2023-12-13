import React, { useState, useEffect} from "react";
import headerlogo from "../assets/img/headerlogo__.png";
import { headerNav } from "../constants";
import Modal from './Modal';

const Header = () => {
    const [show, setShow] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [lastScrollPosition, setLastScrollPosition] = useState(0);
    const [hideHeader, setHideHeader] = useState(true);
    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    }
    const handleClick = () => {
        setIsActive(!isActive);
        setModalOpen(!modalOpen)
    }
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (!modalOpen) {
                setHideHeader(currentScrollY > lastScrollPosition || currentScrollY <= 0);  
            }
            setLastScrollPosition(currentScrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollPosition, modalOpen]);

    return (
        <header id="header" role="banner" className={hideHeader ? 'hide' : ''}>
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
                  <div className="modal__open">
                  {modalOpen && <Modal />}
                  </div>
            </div>
        </header>
    )
}

export default Header;