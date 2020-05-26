import React from 'react';

function JobTask(task) {
    const index = task.index;
    return (
        <li className="resume-list-item">
            {task.MainTask}
            <ul>
                {(task.SubTasks).map((subtask, index) => (
                    <li key={"job-subtask-" + index} className="resume-list-item">{subtask}</li>
                ))}
            </ul>
        </li>
    )
}

export default JobTask;