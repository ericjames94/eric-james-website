import React, { createContext, useState } from 'react';

export const ResumeContext = createContext();

export const ResumeProvider = props => {
    const [resume, setResume] = useState(require("./../Resources/resume.json"));
    
    return (
        <ResumeContext.Provider value={[resume, setResume]}>
            {props.children}
        </ResumeContext.Provider>
    )
}