import React from 'react';
import { motion } from 'framer-motion';
import htmlIcon from '../images/html.svg';
import cssIcon from '../images/css.svg';
import jsIcon from '../images/javascript.svg';
import reactIcon from '../images/react.svg';
import nodeIcon from '../images/node.svg';
import mongodbIcon from '../images/mongodb.svg';
import javaIcon from '../images/java.svg';
import gitIcon from '../images/git.svg';

const Skills = () => {
    return (
        <section className="section-center" id="my-skills">
            <h2 className="section-label">Skills</h2>
            <div className="skills">
                <div>
                    <motion.img src={jsIcon} alt="html" whileHover={{scale: 1.3}}/>
                    <p>JavaScript</p>
                </div>
                <div>
                    <motion.img src={reactIcon} alt="html" whileHover={{scale: 1.3}}/>
                    <p>React</p>
                </div>
                <div>
                    <motion.img src={htmlIcon} alt="html" whileHover={{scale: 1.3}}/>
                    <p>HTML</p>
                </div>
                <div>
                    <motion.img src={cssIcon} alt="html" whileHover={{scale: 1.3}}/>
                    <p>CSS</p>
                </div>
                <div>
                    <motion.img src={nodeIcon} alt="html" whileHover={{scale: 1.3}}/>
                    <p>Node/Express</p>
                </div>
                <div>
                    <motion.img src={mongodbIcon} alt="html" whileHover={{scale: 1.3}}/>
                    <p>MongoDB</p>
                </div>
                <div>
                    <motion.img src={javaIcon} alt="html" whileHover={{scale: 1.3}}/>
                    <p>Java</p>
                </div>
                <div>
                    <motion.img src={gitIcon} alt="html" whileHover={{scale: 1.3}}/>
                    <p>Git</p>
                </div>
            </div>
        </section>
        
    )
}

export default Skills;