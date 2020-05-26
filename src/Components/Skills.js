import React, {useState} from 'react';
import VisibilitySensor from 'react-visibility-sensor';

function Skills(props) {
    const keyName = props.keyName;
    const baseClass = "skills-div";
    const animateClass = "skills-div-animate";

    const [divClass, setDivClass] = useState("skills-div");

    var animateSkills = function (isVisible) {
        setDivClass(isVisible ? baseClass + " " + animateClass : baseClass);
    };

    return (
        <VisibilitySensor onChange={animateSkills} children>
            <div className={divClass}>
                <h4>{keyName}</h4>
                <ul className="resume-list resume-list-center">
                    {(props[keyName]).map((skill, index) => (
                        <li key={index} className="resume-list-item">{skill}</li>
                    ))}
                </ul>
            </div>
        </VisibilitySensor>
    );
}

export default Skills;