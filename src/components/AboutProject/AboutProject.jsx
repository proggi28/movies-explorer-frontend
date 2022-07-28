import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <section className="project" id="section-project">
            <h1 className="project__header">О проекте</h1>
            <div className="project__description">
                <article className="project__diplom">
                    <h2 className="project__header-description">Дипломный проект включал 5 этапов</h2>
                    <p className="project__diplom-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </article>
                <article className="project__diplom">
                    <h2 className="project__header-description">На выполнение диплома ушло 5 недель</h2>
                    <p className="project__diplom-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </article>
            </div>
            <div className="project__indication">
                <div className="project__indication-block">
                    <div className="project__indication-title project__indication-title_first">1 неделя</div>
                    <div className="project__indication-text ">Back-end</div>
                </div>
                <div className="project__indication-block">
                    <div className="project__indication-title project__indication-title_second">4 недели</div>
                    <div className="project__indication-text">Front-end</div>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;