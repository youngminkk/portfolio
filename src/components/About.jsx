import React, { useEffect, useRef, useState } from "react";

import about from "../assets/img/about.jpg";
import contactUs from "../assets/img/contact_us.png";
import kym from "../assets/img/kym.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutText } from "../constants";


const About = () => {
    const imgRef = useRef(null);
    const aboutRef = useRef(null);
    const aboutImgRef = useRef(null);
    const [image, setImage] = useState(contactUs);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(aboutImgRef.current, {
            duration: 2,
            x: 500,
            rotation: 360,
            borderRadius: 100,
            scrollTrigger: {
                trigger: aboutImgRef.current,
                start: "top 50%",
                end: "bottom 20%",
                toggleActions: "play none reverse none",
                markers: false
            }
        });
        gsap.fromTo(aboutRef.current, { opacity: 0 }, { opacity: 1, duration: 2 });
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
                <div className="about__container">
                    <div className="">
                        <div className="about__image" ref={imgRef} onClick={handleClick}>
                            <img src={image} alt="CONTACT US" />
                        </div>
                    </div>
                    <div className="">
                        <div className="about__about" ref={aboutRef}>
                    {aboutText.about.map((text, index) => (
                        <div key={index}>{text}</div>
                    ))}
                        </div>
                    </div>
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
            </div>
        </section>
    )
}

export default About;