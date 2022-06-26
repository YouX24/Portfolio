import React from 'react';

const Card = (props) => {

    const techStack = props.tech.map((t) => <span className="tech-used">{t}</span>)

    return (
        <div className='card'>
            <img className="project-thumbnail" src={props.thumbnail} alt="project thumbnail"/>
            <div className="project-info">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                {techStack}
                <div className="project-btn-center">
                    <a className="project-btn" href={props.link}><button>GitHub</button></a>
                </div>
            </div>
        </div>
    )
}

export default Card;