import React from 'react';
import ScrollTo from 'react-scroll-into-view'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';

import JobSummary from './JobSummary';
import SkillsSummary from './SkillsSummary';
import ContactForm from './ContactForm';

function Home() {
    return(
        <div className="container">
            <section id="home">
                <div className="section-div-container color-04 color-text-01">
                    <div className="section-content home-div-header">
                        <span>
                            <h3 className="slide-from-left">
                                HI
                                <span className="color-text-03">,</span>
                                <br/> 
                                I
                                <span className="color-text-03">'</span>
                                M ERIC
                                <span className="color-text-03">.</span>
                            </h3>
                        </span>
                       <span className="color-text-01">
                            <h4 className="slide-from-right">WEB DEVELOPER</h4>
                        </span>
                        <ScrollTo selector="#skills">
                            <span className="scroll-span">
                                <span>View skills</span>                          
                                <span><FontAwesomeIcon icon={faChevronDown} /></span>
                            </span>
                        </ScrollTo>
                    </div>
                </div>
            </section>
            <section id="skills">
                <div className="section-div-container skills-container color-04 color-text-01">
                    <div className="skill-summary-background"/>
                        <SkillsSummary/>
                        <ScrollTo selector="#experience">
                            <span className="scroll-span">
                                <span>View experience</span>                          
                                <span><FontAwesomeIcon icon={faChevronDown} /></span>
                            </span>
                        </ScrollTo>
                </div>
            </section>
            <section id="experience">
                <div className="section-div-container color-04 color-text-01">
                    <div className='job-summary-background'/>
                    <JobSummary/>
                    <ScrollTo selector="#contact">
                        <span className="scroll-span">
                            <span>Contact me</span>                          
                            <span><FontAwesomeIcon icon={faChevronDown} /></span>
                        </span>
                    </ScrollTo>
                </div>
            </section>
            <section id="contact">
                <div className="section-div-container color-02">
                    <div className="contact-form-background"/>
                    <ContactForm/>
                    <ScrollTo selector="#home" className="center color-text-04">
                        <span className="scroll-span no-text-shadow">
                            <span><FontAwesomeIcon icon={faChevronUp} /></span>
                            <span>Back to top</span> 
                        </span>
                    </ScrollTo>
                </div>
            </section>
        </div>
    );

}

export default Home;