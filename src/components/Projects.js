import React from 'react';
 
const Projects = () => {
    return (
        <div id="projects" className="pre-projects-container">

            <div className="projects-container">

                <div className="projects">
                    <h1>My Projects</h1>
                    <div className="projects-wrapper">                    

                        <div className="projects-description project-one">
                            <img className="image" src="../imageGallery.png" alt="" />
                            <div className="overlay">
                                <h3>Image Gallery</h3>
                                <p>A website where users can sign up upload, view, edit, and delete their images. It was built with React Js, Tailwind CSS, Node Js (Express), MySQL, and Cloudinary. This is my first ever deployed project.</p>
                                <a href="https://koketjocomgallery.netlify.app/" target="_blank" rel="noreferrer">View Project</a>
                            </div>
                        </div>

                        <div className="projects-description project-two">
                            <img className="image" src="../weatherApp.png" alt="" />
                            <div className="overlay">
                                <h3>Weather Website</h3>
                                <p>The objective was to create a weather app using openweathermap api. The project was built using only React Js with ES6.</p>
                                <a href="https://koketjoweather.netlify.app/" target="_blank" rel="noreferrer">View Project</a>
                            </div>
                        </div>

                        <div className="projects-description project-three">
                            <img className="image" src="../accountSystem.png" alt="" />
                            <div className="overlay">
                                <h3>Account System</h3>
                                <p>The objective was to create an API for Discovery Vitality that will allow members to view, add, and subtract miles from their miles account. The project was built using Java with Springboot, MySQL, and Swagger UI.</p>
                                <a href="https://github.com/KoketjoSethobja/AccountSystem" target="_blank" rel="noreferrer">View Project</a>
                            </div>
                        </div>                      

                    </div>
                </div>

            </div>

        </div>
    )
}
 
export default Projects;