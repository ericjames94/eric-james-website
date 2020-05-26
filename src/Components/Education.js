import React from 'react';

function Education (entry) {
    return (
        <div>
            <h4>{entry.University}</h4>
            <p>
                {entry.Degree} - {entry.GraduationDate}
            </p>
            
        </div>
    );
}

export default Education;