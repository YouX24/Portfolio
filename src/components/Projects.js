import React from 'react';
import Card from './Card'
import smartCity from '../images/smart-city.jpg';
import steadyAid from '../images/steady-aid.png';
import sortingVisualizer from '../images/sorting-visualizer.PNG';
import portfolioWeb from '../images/portfolio-web.PNG';
import smartCityGif from '../images/smart-city-gif.gif';
import steadyAidGif from '../images/steady-aid-gif.gif';

const Projects = () => {
    return (
        <section id="my-projects" className="section-center">
            <h2 className="section-label">Projects</h2>
            <div className='projects'>
                <Card
                    thumbnail={sortingVisualizer}
                    title="Sorting Algorithm Visualizer"
                    description="Web based project to visually show the inner working of Bubble Sort, Selection Sort, Insertion Sort, Quick Sort, and Merge Sort."
                    tech={["React","JavaScript", "HTML", "CSS"]}
                    github="https://github.com/YouX24/Sorting-Algo-Visualizer"
                    weblink="https://youx24.github.io/Sorting-Algo-Visualizer/"
                />
                <Card
                    thumbnail={portfolioWeb}
                    title="Portfolio"
                    description="A personal portfolio website to conviently display my skills, projects, and contact information."
                    tech={["React","JavaScript", "HTML", "CSS"]}
                    github="https://github.com/YouX24/Portfolio"
                    weblink="https://youx24.github.io/Portfolio/"
                />
                <Card
                    thumbnail={steadyAid}
                    title="Steady Aid"
                    description="Fullstack web application to connect users to local non profit organizations. Organizations can sign up and create a post requesting assistances. 
                    Users/Donors can connect to organizations and help out."
                    tech={["JavaScript", "HTML", "CSS", "Bootstrap","Node/Express", "MongoDB"]}
                    github="https://github.com/YouX24/SteadyAid"
                    gif={steadyAidGif}
                />
                <Card
                    thumbnail={smartCity}
                    title="Smart City"
                    description="Fullstack web application targeted towards people who are new to Eau Claire, Wisconsin. 
                    Features a map where user can locate places in the city, news section to views recent local news, and a job board."
                    tech={["JavaScript", "HTML", "CSS", "Bootstrap", "Node/Express", "MongoDB", "Google Maps API", "News API"]}
                    github="https://github.com/YouX24/Smart-City"
                    gif={smartCityGif}
                />
            </div>
        </section>
    )
}

export default Projects;