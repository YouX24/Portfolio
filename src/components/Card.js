import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from './Modal';

const Card = (props) => {

    const [modalOpen, setModalOpen] = React.useState(false)

    const toggleModal = () => {
        setModalOpen(!modalOpen)
    }

    const techStack = props.tech.map((t) => <span className="tech-used">{t}</span>)

    return (
        <div className='card'>
            <img className="project-thumbnail" src={props.thumbnail} alt="project thumbnail"/>
            <div className="project-info">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                {techStack}
                <div className="project-btn-center">
                    {props.weblink && 
                        <a href={props.weblink} target="_blank" rel="noopener noreferrer">
                            <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                                View Live
                            </motion.button>
                        </a>
                    }
                    {props.gif && 
                        <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={toggleModal}>
                            View project GIF
                        </motion.button>
                    }
                    <a href={props.github} target="_blank" rel="noopener noreferrer">
                        <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                            GitHub
                        </motion.button>
                    </a>
                </div>
            </div>
            <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
                {modalOpen && <Modal modalOpen={modalOpen} handleClose={toggleModal} gif={props.gif}/>}
            </AnimatePresence>
        </div>
    )
}

export default Card;