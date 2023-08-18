import React from 'react';
import '../stylesheets/NavBar.css'; // Asegúrate de tener el archivo CSS correspondiente
import { Link } from 'react-scroll';

const sections = ['home', 'skills', 'projects'];

function NavBar() {
    return (
        <div className="nav-container">
            <nav className="navbar">
                <div className="nav-background">
                    <ul className="nav-list">
                        {sections.map((section, index) => (
                            <li key={index}>
                                <Link to={section} spy smooth duration={500} >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
