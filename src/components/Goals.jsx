import React from "react";
import { motion } from "framer-motion";
import { goalsText } from "../constants";

const Goals = () => {
  const waveAni = {
    hover: {
      x: [0, 5, -5, 5, -5, 0],
      transition: {
        ease: "linear",
        duration: 0.5,
      },
    },
  };
  return (
    <section id="goals">
      <div className="goals__inner">
        <h2 className="goals__title ">
          goals <em></em>
        </h2>
        <div className="goals__desc">
          {goalsText.map((goals, key) => (
            <motion.div key={key} variants={waveAni} whileHover="hover">
              <motion.h3
                className="underline2"
                whileHover={{
                  scale: 1.1,
                  color: "#772E2E",
                  transition: { type: "spring", stiffness: 300, damping: 20, },
                }}
              >
                {goals.title}
              </motion.h3>
              <p>{goals.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;
