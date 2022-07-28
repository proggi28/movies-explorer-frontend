import React from 'react';
import './Techs.css';

function Techs() {
    return(
        <section className="technologies" id="section-techs">
            <h1 className="technologies__header">Технологии</h1>
            <div className="technologies__description">
                <h2 className="technologies__header-description">7 технологий</h2>
                <p className="technologies__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="technologies__list">
                    <li className="technologies__list-blocks">HTML</li>
                    <li className="technologies__list-blocks">CSS</li>
                    <li className="technologies__list-blocks">JS</li>
                    <li className="technologies__list-blocks">React</li>
                    <li className="technologies__list-blocks">Git</li>
                    <li className="technologies__list-blocks">Express.js</li>
                    <li className="technologies__list-blocks">MongoDB</li>
                </ul>
            </div>
        </section>
    )
}

export default Techs;