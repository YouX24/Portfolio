import React from 'react';
import Card from './Card'
import smartCity from '../images/smart-city.jpg';
import steadyAid from '../images/steady-aid.png';

const Projects = () => {
    return (
        <section id="my-projects" className="section-center">
            <h2 className="section-label">Projects</h2>
            <div className='projects'>
                <Card
                    thumbnail={steadyAid}
                    title="Steady Aid"
                    description="Fullstack web application to connect users to local non profit organizations. Organizations can sign up and create a post requesting assistances. Users/Donors can connect to organizations and help out."
                    tech={["HTML", "CSS", "JavaScript", "Node/Express", "MongoDB"]}
                    link=""
                />
                <Card
                    thumbnail={smartCity}
                    title="Smart City"
                    description="Fullstack web application targeted towards people who are new to Eau Claire, Wisconsin. Features a map where user can locate places in the city, news section to views recent local news, and a job board."
                    tech={["HTML", "CSS", "JavaScript", "Node/Express", "MongoDB", "Google Maps API", "News API"]}
                    link=""
                />
            </div>
        </section>
    )
}

export default Projects;