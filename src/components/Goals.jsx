import React from "react";
import { motion } from "framer-motion";
import { goalsText } from "../constants";

const Goals = () => {
    const waveAni = {
        hover: {
            rotate: [0, 5, -5, 5, -5, 0],
            transition: {
                duration: 0.5,
            },
        },
    };
    return (
        <section id="goals">
            <div className="goals__inner">
                <h2 className="goals__title">
                    goals <em></em>
                </h2>
                <div className="goals__desc">
                    {goalsText.map((goals, key) => (
                        <motion.div
                            key={key}
                            variants={waveAni}
                            whileHover="hover"
                        >
                            <h3>{goals.title}</h3>
                            <p>{goals.desc}</p>
                        </motion.div>
                    ))}
            </div>
        </div>
        </section >
    )
}

export default Goals;