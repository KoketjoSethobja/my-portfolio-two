import React, { useState, useEffect } from 'react';

const Navbar = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        changeBackground();
        window.addEventListener("scroll", changeBackground)
    })

    return (
        <div 
            className={scrolled ? "pre-nav-container scrolled" : "pre-nav-container"}
        >

            <div className="nav-container">

                <nav className="navigation">
                    <a href="#home" className="logo">
                        KEKE
                    </a>
                    <button 
                        className="hamburger"
                        onClick={() => {
                            setIsNavExpanded(!isNavExpanded);
                        }}
                    >                        
                        { 
                            isNavExpanded 
                            ? 
                            <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" fill="currentColor"></path></svg> 
                            : 
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>
                        }
                    </button>
                    <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                        <ul>
                            <li 
                                onClick={() => {
                                    setIsNavExpanded(!isNavExpanded);
                                }}
                            >
                                <a href="#home">Home</a>
                            </li>
                            <li
                                onClick={() => {
                                    setIsNavExpanded(!isNavExpanded);
                                }}
                            >
                                <a href="#skills">Skills</a>
                            </li>
                            <li
                                onClick={() => {
                                    setIsNavExpanded(!isNavExpanded);
                                }}
                            >
                                <a href="#projects">Projects</a>
                            </li>
                            <li
                                onClick={() => {
                                    setIsNavExpanded(!isNavExpanded);
                                }}
                            >
                                <a href="#certificates">Certificates</a>
                            </li>
                            <li
                                onClick={() => {
                                    setIsNavExpanded(!isNavExpanded);
                                }}
                            >
                                <a href="#about">About</a>
                            </li>
                            <li
                                onClick={() => {
                                    setIsNavExpanded(!isNavExpanded);
                                }}
                            >
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    
                </nav>                
            </div>

        </div>
    )
}

export default Navbar;