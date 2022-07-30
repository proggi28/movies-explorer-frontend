import React from "react";
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <h2 className="portfolio__header">Портфолио</h2>
            <div className="portfolio__links">
                <a href="https://proggi28.github.io/how-to-learn" className="portfolio__link" target={"_blank"} rel="noreferrer">Статичный сайт</a>
                <a href="https://proggi28.github.io/russian-travel/" className="portfolio__link" target={"_blank"} rel="noreferrer">Адаптивный сайт</a>
                <a href="https://mesto.praktikum.karpenko.nomoredomains.xyz/" className="portfolio__link" target={"_blank"}rel="noreferrer">Одностраничное приложение</a>
            </div>
        </div>
    )
}

export default Portfolio;