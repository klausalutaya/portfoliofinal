import React from "react";
import { motion } from "framer-motion";
import "./work.css";
import Works from "./Works";

const Work = () => {
  return (
    <motion.section
      className="work section"
      id="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="section__title"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Portfolio
      </motion.h2>
      <motion.span
        className="section__subtitle"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Most Recent Works
      </motion.span>

      <Works />
    </motion.section>
  );
};

export default Work;
