import React from 'react';
import { Link } from 'react-router-dom';
import ScrollTo from 'react-scroll-into-view'

function Nav() {
    return (
        <nav className="color-05">
            <ScrollTo selector="#home">
                <Link to="/" className="color-text-01">
                    <h3 className="home-link">
                            E
                    </h3>
                </Link>
            </ScrollTo>
            <ul className="nav-links">
            <ScrollTo selector="#skills">
                    <a className="color-text-01">
                        <li>Skills</li>
                    </a>
                </ScrollTo>
            <ScrollTo selector="#experience">
                    <a className="color-text-01">
                        <li>Experience</li>
                    </a>
                </ScrollTo>
                <ScrollTo selector="#contact">
                    <a className="color-text-01">
                        <li>Contact</li>
                    </a>
                </ScrollTo>
            </ul>
        </nav>
    );
}

export default Nav;