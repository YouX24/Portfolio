import React from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
    return (
        <section className="intro-section">
            <div>
                <h1 className='name'>Yousae Xiong</h1>
                <p className="intro-description">Computer Science - Software Engineering Student at the University of Wisconsin-Eau Claire</p>
                <a href="#my-projects"><motion.button className="see-project-btn" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>See Projects</motion.button></a>
            </div>
        </section>
    )
}

export default Intro;