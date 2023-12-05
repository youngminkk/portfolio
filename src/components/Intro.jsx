import React from "react";
import Mouse from "../assets/img/mouse.png"
import "../assets/scss/setting/_scrolldown.scss";

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro__inner">
        <h1>안녕하세요</h1>
      </div>
      <div className="scroll__down">
                <p className="scroll">
                   <img src={Mouse} alt="scroll down"/>
                    <span>SCROLL DOWN</span>
                </p>
            </div>
      
    </section>
  );
};

export default Intro;
