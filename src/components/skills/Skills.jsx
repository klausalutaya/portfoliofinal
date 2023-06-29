import React from "react";
import { motion } from "framer-motion";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
  return (
    <motion.div
      style={{ position: "relative", minHeight: "" }}
      transform="preserve-3d"
    >
      <motion.section
        className="skills section"
        id="skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Skills
        </motion.h2>
        <motion.span
          className="section__subtitle"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          My Technical level
        </motion.span>

        <motion.div
          className="skills__container container grid"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <Frontend />

          <Backend />
        </motion.div>
      </motion.section>
    </motion.div>
  );
}

export default Skills;
