import React from 'react';

const Header = () => {
    return (
        <header>
            <h3 className="logo">Y</h3>
            <div className="section-directory">
                <a href="#">Skills</a>
                <a href="#">Projects</a>
                <a href="#">Resume</a>
            </div>
            <div className="socials">
                <a href="https://www.linkedin.com/in/yousaexiong/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin social-icon"></i></a>
                <a href="https://github.com/YouX24" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github social-icon"></i></a>
                <a href=""><i class="fa-solid fa-envelope social-icon"></i></a>
            </div>
        </header>
    )
}

export default Header;