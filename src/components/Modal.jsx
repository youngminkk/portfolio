import React, { useEffect, useRef, useState } from 'react';
import gitIcon from "../assets/img/giticon.png"
import instaIcon from "../assets/img/instaicon.png"
import tistoryIcon from "../assets/img/tistoryicon.png"
import about from "../assets/img/about.jpg";
import { iconLink } from "../constants";
import { modalText } from "../constants";
import { gsap } from 'gsap';

const rotatingTexts = ['풀스택', '백엔드', '프론트'];
const stacks = ["FrontEnd Stack", "BackEnd Stack", "CI & CD", "Infra Stack"];
const Modal = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const textRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % rotatingTexts.length;
                if (textRef.current) {
                    gsap.to(textRef.current, { opacity: 0, duration: 1.2 }).then(() => {
                        gsap.set(textRef.current, { text: rotatingTexts[nextIndex] });
                        gsap.to(textRef.current, { opacity: 1, duration: 2 });
                    });
                }
                return nextIndex;
            });
        }, 4500);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div className="fullscreen__modal">
            <div className="modal__left">
                <div className='modal__container'>
                    <div className='modal__about'><img src={about} alt="about" /></div>
                    <div className='btn'><span>Web Developer</span></div>
                    <div className='modal__icon'>
                        <div className='modal__img'>
                            <a href={iconLink[0].link} target="_blank" rel="noopener noreferrer">
                                <img src={gitIcon} alt="git" />
                            </a>
                        </div>
                        <div className='modal__img'>
                            <a href={iconLink[1].link} target="_blank" rel="noopener noreferrer">
                                <img src={instaIcon} alt="insta" />
                            </a>
                        </div>
                        <div className='modal__img'>
                            <a href={iconLink[2].link} target="_blank" rel="noopener noreferrer">
                                <img src={tistoryIcon} alt="tistory" />
                            </a>
                        </div>
                    </div>
                    <div className='modal__profile'>
                        <div className='modal__title'>
                            <h1>{modalText.title}</h1>
                            <br /><p><span ref={textRef}>{rotatingTexts[currentIndex]}</span>|{modalText.desc[0]}</p></div>
                    </div>
                    <div className='modal__contact'>
                        {modalText.desc.slice(1).map((text, index) => (
                            <div key={index}>{text}</div>
                        ))}
                    </div>
                </div>
                <div><span>© 2023 Created by KYM</span></div>
            </div>
            <div className="modal__right">
                <div className='modal__card'>
                    <div className='modal__stacks'>
                        {stacks.map((stack, index) => (
                            <div key={index} className='modal__var' data-text={stack}>
                                {/* 프론트엔드,백엔드,인프라,CI & CD */}
                            </div>
                        ))}
                    </div>
                    <div className=''></div>
                </div>
            </div>
        </div>
    )
}

export default Modal;