import React, {useState, useContext} from 'react';

import Job from './Job';
import Skills from './Skills';
import Education from './Education';
import {ResumeContext} from './ResumeContext';

//Get the contents of /Resources/resume.json

function Resume() {
    const [resume, setResume] = useContext(ResumeContext);
    const [experience, setExperience] = useState(resume.Experience);
    const [skills, setSkills] = useState(resume.Skills);
    
    return (
        <div>
            <div className="contact-info-div">
                <p>{resume.Name}</p>
                <p>{resume.Address}</p>
                <p>{resume.Phone} </p>
            </div>
            <div>
                <h3>Education</h3>
                <Education {...resume.Education}/>
            </div>
            <div>
                <h3>Work Experience</h3>
                {experience.map((job, index) => (
                    <div key={"job-" + index}>
                        <Job {...job} index={index}/>
                    </div>
                ))}
            </div>
            <div>        
                <div>
                    {(Object.keys(skills)).map((keyName, index) => (
                        <div key={"skills-" + index}>
                            <Skills keyName={keyName} {...(skills)}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Resume;