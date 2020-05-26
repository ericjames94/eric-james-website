import React, {useState, useContext} from 'react';
import {ResumeContext} from './ResumeContext';

function JobSummary() {
    const [resume, setResume] = useContext(ResumeContext);
    const [experience, setJobExperience] = useState(resume.Experience);

    const getRandomTasks = function (job, count) {
        //Get a random task from the Employer being shown
        let taskCount = job.Tasks.length;
        let tasks = Object.assign([], job.Tasks);
        let taskElements = [];

        for (let i = 0; i < count; i++){
            let randTaskIndex = Math.floor(Math.random() * Math.floor(taskCount));
            let task = tasks[randTaskIndex];
            taskElements.push(<li key={"rand-task-" + task.id}>{task.MainTask}</li>)
            
            //Move every task after the displayed task up one index
            for (let j = randTaskIndex; j < tasks.length - 1; j++){
                tasks[j] = tasks[j+1];
            }

            //Delete the last task so we do not have a missing key between two keys
            delete tasks[(taskCount--)];
        }

        return taskElements;
    };

    return (
        <div className="section-content job-summary-div ">
            <h2 className="section-header">Experience Summary</h2>
            {experience.map((job, index) => (
                <div key={"job-summary-" + index}>
                    <h3 className="color-text-02">{job.Employer}</h3>
                    <div>
                        <ul className="job-summary-list">
                            {getRandomTasks(job, 4)}
                        </ul>
                    </div>
                    <div>
                    <a download="resume.pdf" className="download-link" href="resume.pdf"> Click here to download resume</a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default JobSummary;