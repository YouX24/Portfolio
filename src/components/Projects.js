import React from 'react';
import Card from './Card'
import smartCity from '../images/smartcity.png';
import steadyAid from '../images/steadyaid.png';

const Projects = () => {
    return (
        <section id="my-projects">
            <h2>Projects</h2>
            <div className='projects'>
                <Card
                    thumbnail={steadyAid}
                    title="Steady Aid"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod posuere lacinia. Donec ultricies turpis in tincidunt congue. Sed eget."
                    tech={["HTML", "CSS", "JavaScript", "Node/Express", "MongoDB"]}
                    link=""
                />
                <Card
                    thumbnail={smartCity}
                    title="Smart City"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod posuere lacinia. Donec ultricies turpis in tincidunt congue. Sed eget."
                    tech={["HTML", "CSS", "JavaScript", "Node/Express", "MongoDB", "Google Maps API"]}
                    link=""
                />
            </div>
        </section>
    )
}

export default Projects;