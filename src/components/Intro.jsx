import React, { useState, useEffect } from "react";
import Mouse from "../assets/img/mouse.png"
import { motion } from "framer-motion";
import "../assets/scss/setting/_scrolldown.scss";

const words = ["성장하는", "배우고 싶은", "궁금한"];
const delay = 1500; // 각 단어가 화면에 머무는 시간

const Intro = () => {
  const [index, setIndex] = useState(0); // 현재 표시되는 단어의 인덱스
  const [charIndex, setCharIndex] = useState(0); // 현재 표시되는 문자의 인덱스

  useEffect(() => {
    const word = words[index];
    if (charIndex < word.length) {
      setTimeout(() => setCharIndex(charIndex + 1), 150); // 한 글자씩 나타나게 함
    } else {
      setTimeout(() => {
        setCharIndex(0);
        setIndex((index + 1) % words.length); // 다음 단어로 넘어감
      }, delay);
    }
  }, [charIndex, index]);

  const navigateTo = (selector) => {
    window.scrollTo({
      top: document.querySelector(selector).offsetTop,
      behavior: "smooth"
    });
  };

  return (
    <section id="intro">
      <div className="intro__inner">
        <h1>
          {words[index].slice(0, charIndex).split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
            {char} 
            </motion.span>
          ))}
          &nbsp;개발자입니다.
        </h1>
      </div>
      <div className="scroll__down" onClick={() => navigateTo("#about")}>
        <p className="scroll">
          <img src={Mouse} alt="scroll down"/>
          <span>SCROLL DOWN</span>
        </p>
      </div>
    </section>
  );
};

export default Intro;