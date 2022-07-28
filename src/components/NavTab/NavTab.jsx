import React from 'react';
import './NavTab.css';
import { HashLink as Link } from 'react-router-hash-link';

function NavTab() {
    return(
        <nav className="navigation">
            <Link to="#section-project" className="navigation__link">О проекте</Link>
            <Link to="#section-techs" className="navigation__link">Технологии</Link>
            <Link to="#section-me" className="navigation__link">Студент</Link>
        </nav>
    )
}

export default NavTab;
