import React from 'react';

import Resume from './Resume';

function About() { 
    window.addEventListener('scroll', function (e) {
        console.log(e);
    });

    return (
        <div className="container">
            <section className="no-scroll-snap">
                <h3>
                    About Page
                </h3>
                <div>
                    <Resume/>
                </div>
            </section>
        </div>
    );
}

export default About;