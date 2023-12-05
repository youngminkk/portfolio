import React from "react";
import { motion} from "framer-motion";

const loadingText = "LOADING....☕";

const Loading = () => {
  const loadingSequence = [...loadingText].map((char, index) => ({
    text: char,
    delay: index * 0.2 
  }));

  return (
    <div className="loading__page">
      {loadingSequence.map(({ text, delay }) => (
        <motion.div
          key={text + delay}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay, duration: 0.5 }}
          style={{ fontSize: '2em' }}
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
};

export default Loading;