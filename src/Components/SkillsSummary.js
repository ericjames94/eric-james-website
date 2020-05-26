import React from 'react';
import {ResumeContext} from './ResumeContext';
import { useContext, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

function SkillsSummary () {
    const [resume, setResume] = useContext(ResumeContext);
    const [skills, setSkills] = useState(resume.Skills);
    const skillKey = "Programming Languages";

    return (
        <div>
            <div className="section-content">
                <h3 className="section-header">Skills Summary</h3>
                <div className="skill-summary-list-container">
                    <div className="skills-columns-container">
                        <span>
                            <div>
                                <p>
                                    Programming Languages
                                </p>
                                <ul>
                                    <li>jQuery</li>
                                    <li>JavaScript</li>
                                    <li>C#</li>
                                    <li>CSS</li>
                                    <li>HTML</li>
                                </ul>
                            </div>
                        </span>
                        <span>
                            <div>
                                <p>
                                    Frameworks & Technologies
                                </p>
                                <ul>
                                    <li>Visual Studio</li>
                                    <li>SVN</li>
                                    <li>GIT</li>
                                    <li>ASP.NET</li>
                                </ul>
                            </div>
                            </span>
                            <span>
                                <div>
                                    <p>
                                        Things I am Learning
                                    </p>
                                    <ul>
                                        <li>React*</li>
                                        <li>AWS</li>
                                        <li>Vue</li>
                                        <li>Angular</li>
                                    </ul>
                                </div>
                            </span>
                    </div>
                    
                </div>
            </div>
            <span style={{position: 'relative'}}>* Used to build what you're seeing here!</span>
        </div>
    );
}

export default SkillsSummary