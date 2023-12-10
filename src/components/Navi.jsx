import React, { useState } from "react";
import { navbar } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const Navi = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navi">
      <button onClick={() => setIsOpen(!isOpen)} className="navi__btn">
        {isOpen ? "Close" : "Open"}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            exit={{ width: 0 }}
            transition={{ duration: 0.5 }}
          >
            {navbar.map((navItem) => (
              <a
                key={navItem.title}
                href={navItem.url}
                onClick={() => setActiveNav(navItem.url)}
                className={activeNav === navItem.url ? "active" : ""}
              >
                {navItem.icon}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navi;