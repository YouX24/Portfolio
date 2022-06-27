import React from 'react';
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
        <section className="section-center">
            <h2 className="section-label">Skills</h2>
            <div className="skills">
                <div>
                    <img src={htmlIcon} alt="html"/>
                    <p>HTML</p>
                </div>
                <div>
                    <img src={cssIcon} alt="html"/>
                    <p>CSS</p>
                </div>
                <div>
                    <img src={jsIcon} alt="html"/>
                    <p>JavaScript</p>
                </div>
                <div>
                    <img src={reactIcon} alt="html"/>
                    <p>React</p>
                </div>
                <div>
                    <img src={nodeIcon} alt="html"/>
                    <p>Node/Express</p>
                </div>
                <div>
                    <img src={mongodbIcon} alt="html"/>
                    <p>MongoDB</p>
                </div>
                <div>
                    <img src={javaIcon} alt="html"/>
                    <p>Java</p>
                </div>
                <div>
                    <img src={gitIcon} alt="html"/>
                    <p>Git</p>
                </div>
            </div>
            {/* Icons by <a target="_blank" href="https://icons8.com">Icons8</a> */}
        </section>
        
    )
}

export default Skills;