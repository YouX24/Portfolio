import React from 'react';

const Header = () => {

    let menuOpen = false;

    const menuToggle = () => {
        const menuBtn = document.querySelector('.menu-btn-burger')
        const burgerNavMenu = document.querySelector('.burger-nav-menu')

        if (!menuOpen) {
            menuBtn.classList.add('open');
            burgerNavMenu.style.visibility = "visible"
            burgerNavMenu.style.opacity = "1";
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open')
            burgerNavMenu.style.visibility = "hidden"
            burgerNavMenu.style.opacity = "0";
            menuOpen = false;
        }
    }

    return (
        <header>
            <h3 className="logo">Y</h3>
            <div className="section-directory">
                <a href="#"><i class="twa twa-hammer-and-wrench"></i> Skills</a>
                <a href="#"><i class="twa twa-card-file-box"></i> Projects</a>
                <a href="#"><i class="twa twa-laptop"></i> About</a>
                <a href="#"><i class="twa twa-page-with-curl"></i> Resume</a>
            </div>
            <div className="socials">
                <a href="https://www.linkedin.com/in/yousaexiong/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin social-icon"></i></a>
                <a href="https://github.com/YouX24" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github social-icon"></i></a>
                <a href="mailto:x.yousae@gmail.com"><i class="fa-solid fa-envelope social-icon"></i></a>
            </div>
            <div className="menu-btn-container"  onClick={menuToggle}>
                <div className="menu-btn-burger"></div>
            </div>
            <section className="burger-nav-menu">
                <div className="burger-nav-menu-center">
                    <ul>
                        <li>
                            <a href="skills"><i class="twa twa-hammer-and-wrench"></i> Skills</a>
                        </li>
                        <li>
                            <a href="#my-projects"><i class="twa twa-card-file-box"></i> Projects</a>
                        </li>
                        <li>
                            <a href="about"><i class="twa twa-page-with-curl"></i> About</a>
                        </li>
                        <div className="socials-nav-menu">
                            <a href="https://www.linkedin.com/in/yousaexiong/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin social-icon"></i></a>
                            <a href="https://github.com/YouX24" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github social-icon"></i></a>
                            <a href="mailto:x.yousae@gmail.com"><i class="fa-solid fa-envelope social-icon"></i></a>
                        </div>
                    </ul>
                </div>
            </section>
        </header>
    )
}

export default Header;