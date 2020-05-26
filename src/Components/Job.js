import React from 'react';

import JobTask from './JobTask'

function Job (job) {
    return (
        <div>
            <h4>{job.Employer}</h4>
            <h4>{job.Role}</h4>
            <div>
                <ul className="resume-list">
                    {(job.Tasks).map((task, index) => (
                        <div key={"job-task-" + index}>
                            <JobTask {...task} index={index} />
                        </div>
                    ))}
                </ul>
            </div>    
        </div>
    );
}

export default Job;