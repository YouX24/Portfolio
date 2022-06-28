import React from 'react';
import { motion } from 'framer-motion';
import Backdrop from './Backdrop';

const dropIn = {
    hidden: {
        y: "-100vh"
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500
        }
    },
    exit: {
        y: "100vh"
    }
}

const Modal = ({ handleClose, gif }) => {
    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div>
                    <img className="gif" src={gif} alt=""/>
                </div>
                <motion.button class="modal-close-btn" onClick={handleClose} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>X</motion.button>
            </motion.div>
        </Backdrop>
    )
}

export default Modal;