import React from "react";
import { motion } from "framer-motion";
import "./home.css"
import Social from "./Social"
import Data from "./Data";
import ScrollDown from "./ScrollDown"

const Home = () => {
    return (
        <motion.section
            className="home section"
            id="home"
            initial={{ opacity: 0 }} // Initial opacity
            animate={{ opacity: 2 }} // Animating opacity from 0 to 1
            transition={{ duration: 3 }} // Animation duration
        >
            <div className="home__container container grid">
                <motion.div
                    className="home__content grid"
                    initial={{ opacity: 0, y: 50 }} // Initial opacity and y-axis position
                    animate={{ opacity: 1, y: 1 }} // Animating opacity and y-axis position
                    transition={{ duration: 1, delay: 0.5 }} // Animation duration and delay
                >
                    <Social />
                    <motion.div
                        className="home__img"
                        initial={{ opacity: 0, scale: 0.5 }} // Initial opacity and scale
                        animate={{ opacity: 1, scale: 1 }} // Animating opacity and scale
                        transition={{ duration: 1 }} // Animation duration
                    ></motion.div>

                    <Data />
                </motion.div>

                <ScrollDown />
            </div>
        </motion.section>
    );
}

export default Home;
