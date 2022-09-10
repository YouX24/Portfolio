import React from 'react';
import Avatar from '../images/relaxing-laptop.png'

const About = () => {
    return (
        <section id="about" className="section-center-no-margin">
            <h2 className="section-label">About</h2>
            <div className="about-p-container">
                <p>I am a self-driven and goal-oriented student studying Computer Science at the University of Wisconsin-Eau Claire. I am passionate about working alongside people on software that will create a positive impact on people's lives.</p>
                <p>In my freetme, I enjoy playing sports, watching movies, and casual gaming.</p>
                <p>When I find a hobby I enjoy doing, I want to excel at it.</p>
            </div>
            <img className="about-img" src={Avatar} alt="soccer"/>
        </section>
    )
}

export default About;