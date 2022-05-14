import React from 'react';

const Skills = () => {
    return (
        <div id="skills" className="pre-skills-container">

            <div className="skills-container">

                <div className="skills">
                    <h1>My Skills</h1>
                    <div className="skills-wrapper">
                        <div className="skill-description skill-one">
                            <p className="skills-logo">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7.375 16.781l1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4C2.138 11.409 2 11.696 2 12s.138.591.375.781L7.375 16.781zM16.625 7.219l-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4C21.862 12.591 22 12.304 22 12s-.138-.591-.375-.781L16.625 7.219z"></path><path transform="rotate(102.527 12 12)" d="M2.78 11H21.219V13.001H2.78z"></path></svg>
                            </p>    
                            <h3>Web Development</h3>
                            <p>
                                Proficient in HTML, CSS, Bootstrap, Tailwind CSS,
                                JavaScript, React JS, Node Js, C#, MySQL, and MSSQL. 
                                Able to develop fast, interactive, and user-friendly website.
                            </p> 
                        </div>
                        <div className="skill-description skill-two">
                            <p className="skills-logo">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 22h1v-2H9.011C8.703 19.994 6 19.827 6 16c0-1.993-.665-3.246-1.502-4C5.335 11.246 6 9.993 6 8c0-3.827 2.703-3.994 3-4h1V2H8.998C7.269 2.004 4 3.264 4 8c0 2.8-1.678 2.99-2.014 3L2 13c.082 0 2 .034 2 3C4 20.736 7.269 21.996 9 22zM22 11c-.082 0-2-.034-2-3 0-4.736-3.269-5.996-5-6h-1v2h.989C15.297 4.006 18 4.173 18 8c0 1.993.665 3.246 1.502 4C18.665 12.754 18 14.007 18 16c0 3.827-2.703 3.994-3 4h-1v2h1.002C16.731 21.996 20 20.736 20 16c0-2.8 1.678-2.99 2.014-3L22 11z"></path></svg>                            </p>
                            <h3>Software Development</h3>
                            <p>
                                Proficient in Java, Swagger UI, MySQL, MSSQL,
                                Maven as a build tool, and Spring Boot. Able to develop
                                reliable and good softwares.
                            </p> 
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Skills;