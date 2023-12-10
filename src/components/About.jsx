import React, { useEffect, useRef, useState } from "react";
import about from "../assets/img/about.jpg";
import contactUs from "../assets/img/contact_us1.gif";
import kym from "../assets/img/kym.png";
import { gsap } from "gsap";
import { CSSPlugin } from 'gsap/CSSPlugin';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutText } from "../constants";

const About = () => {
    const imgRef = useRef(null);
    const aboutRef = useRef(null);
    const aboutImgRef = useRef(null);
    const [image, setImage] = useState(contactUs);

    useEffect(() => {
        gsap.registerPlugin(CSSPlugin);
        gsap.registerPlugin(ScrollTrigger);

        let imgTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: aboutImgRef.current,
                start: "top bottom",
                end: "bottom 30%",
                toggleActions: "restart pause reverse pause",
            }
        });

        imgTimeline.to(aboutImgRef.current, {
            duration: 2,
            x: 500,
            rotation: 360,
            borderRadius: 100,
        });

        const textElements = aboutRef.current.querySelectorAll('span');
        let textTimeline = gsap.timeline();

        textTimeline.set(textElements, { opacity: 0 });
        textTimeline.to(textElements, { opacity: 1, duration: 2.0, stagger: 0.07 });

        ScrollTrigger.create({
            trigger: aboutRef.current,
            start: 'top bottom',
            end: 'bottom top',
            onEnter: () => textTimeline.restart(),
            onLeave: () => textTimeline.pause(),
            onEnterBack: () => textTimeline.restart(),
        });
    }, []);

    const handleClick = () => { 
        setImage(image === contactUs ? kym : contactUs);
        const currentScale = gsap.getProperty(imgRef.current, 'scale');
        const scaleValue = currentScale > 1 ? 1 : 1.1;
        gsap.to(imgRef.current, { scale: scaleValue, duration: 0.2 });
    };

    return (
        <section id="about">
            <div className="about__inner">
                <div className="title__wrapper">
                    <h2 className="about__title underline">{aboutText.title}</h2>
                </div>
                <div className="about__text">
                    <div className="text">
                        <div>{aboutText.desc[0]}</div>
                        <div>{aboutText.desc[1]}</div>
                    </div>
                    <div className="img" ref={aboutImgRef}>
                        <img src={about} alt="어바웃미" />
                    </div>
                </div>
                <div className="about__container">
                    <div className="">
                        <div className="about__image" ref={imgRef} onClick={handleClick}>
                            <img src={image} alt="CONTACT US" />
                        </div>
                    </div>
                    <div className="">
                        <div className="about__about" ref={aboutRef}>
                            {aboutText.about.map((text, index) => (
                            <div key={index}>
                                {text.split('').map((char, i) => <span style={{ opacity: 0 }} key={i}>{char}</span>)}
                            </div>
                    ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;