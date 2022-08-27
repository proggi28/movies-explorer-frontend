import React from "react";
import { Link } from "react-router-dom";
import './HeaderLogin.css';

function HeaderLogin() {
    return (
        <div className="header-navigation__container">
            <div className="header-navigation__links">
                <Link to="/movies" className="header-navigation__movies">
                    Фильмы
                </Link>
                <Link to="/saved-movies" className="header-navigation__movies">
                    Сохраненные фильмы
                </Link>
            </div>
            <div className="header-account">
                <Link to="/profile" className="header-account__button">Аккаунт</Link>
                <div className="header-account__logo"></div>
            </div>
        </div>
    )
}

export default HeaderLogin;