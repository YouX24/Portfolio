import React from 'react';
import Avatar from '../images/relaxing-laptop.png'

const About = () => {
    return (
        <section id="about" className="section-center-no-margin">
            <h2 className="section-label">About</h2>
            <div className="about-p-container">
                <p>I am a self-driven and goal-oriented student studying Computer Science, Software Engineering at the University of Wisconsin-Eau Claire. As a passionate student, I continue to learn to advance myself as a software engineer.</p>
                <p>When I find a hobby I enjoy doing, I want to excel at it.</p>
                <p>Activities I do when I am not programming are playing sports, watching Netflix, or hanging out with friends.</p>
            </div>
            <img className="about-img" src={Avatar} alt="soccer"/>
        </section>
    )
}

export default About;