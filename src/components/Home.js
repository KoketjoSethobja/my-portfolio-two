import React from 'react';
import Typewriter from 'typewriter-effect';
 
const Home = () => {
    return (
        <div id="home" className="pre-home-container">
            
            <div className="home-container">
                
                <div className="home">
                    <div className="intro-svg">                        
                    </div>
                    <div className="intro">
                        <div className="intro-info">
                            <h1 className="typewriter">
                                I'm&nbsp;
                                    <Typewriter
                                        options={{
                                            strings: [' Koketjo Sethobja', ' a Software Developer', ' a Web Developer'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                            </h1>
                            <p>
                                I'm a Web Developer, and Software Developer from South Africa.
                                I enjoy developing websites and softwares to help businesses and
                                individuals do better online.
                            </p>
                            <a href="https://drive.google.com/uc?export=download&id=1argQldunpWX9-jawK-VPVl_dMEiG9cCP" target="_blank" rel="noreferrer">
                                Download <span>CV</span>
                            </a>   
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
 
export default Home;