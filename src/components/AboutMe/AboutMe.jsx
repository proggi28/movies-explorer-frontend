import React from 'react';
// import { Link } from 'react-router-dom';
import './AboutMe.css';
import photo from '../../images/png/me-avatar1.png';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
    return (
        <section className="about-me" id="section-me">
            <h1 className="about-me__header">Студент</h1>
            <div className="about-me__description">
                <article className="about-me__text">
                    <h2 className="about-me__name">Игорь</h2>
                    <h3 className="about-me__profession">Фронтенд-разработчик, 29 лет</h3>
                    <p className="about-me__paragraph">Всем привет! Меня зовут Игорь, живу в городе Орёл, закончил факультет документных коммуникаций ОГИИК. У меня есть жена и кот. На данный момент работаю торговым представителем в табачной компании. Люблю ездить на машине, увлекаюсь футболом. Интерес к программированию был еще в школе, но что-то не срослось и пошел учиться на гумманитария. С 2019 в течение 2 лет через онлайн-уроки и небольшие курсы пытался немного кодить, а в апреле 2021 всё-таки решился записаться на курс "Веб-разработчик" в Яндекс.Практикуме. Хочу по окочанию курса найти работу в IT-сфере и наконец-таки уволиться с нелюбимой работы. </p>
                     <a href="https://github.com/" target="_blank" className="about-me__link" rel="noreferrer">Facebook</a>
                     <a href="https://github.com/proggi28" target="_blank" className="about-me__link" rel="noreferrer">Github</a>
                </article>
                <article className="about-me__photo">
                    <img src={photo} alt="Фото профиля студента" className="about-me__photo-size" />
                </article>
            </div>
            <Portfolio />
        </section>
    )
}

export default AboutMe;