import React from "react";
import './PageNotFound.css';
import { Link } from "react-router-dom";

function PageNotFound() {
    return (
            <div className="error-page">
                <div className="error-page__container">
                    <h2 className="error-page__header">404</h2>
                    <p className="error-page__text">Страница не найдена</p>
                    <Link exact to="/" className="error-page__back-link">Назад</Link>
                </div>
            </div>
    )
}

export default PageNotFound;