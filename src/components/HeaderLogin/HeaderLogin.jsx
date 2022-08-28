import React from "react";
import { Link } from "react-router-dom";
import './HeaderLogin.css';
import { useState } from "react";

function HeaderLogin() {
    const [isOpenBurger, setOpenBurger] = useState(false);

    const handleOpenBurger = () => {
        setOpenBurger(true);
    }
    const handleCloseBurger = () => {
        setOpenBurger(false);
    }
    return (
        <>
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
            <button className="header-navigation__burger-button" onClick={handleOpenBurger}></button>
            {isOpenBurger ? (
                <div className="header-navigation__burger-menu">
                    <div className="header-navigation__burger-menu_container">
                        <button className="header-navigation__burger-menu_close" onClick={handleCloseBurger}></button>
                        <div className="header-navigation-burger-menu_content">
                            <div className="header-navigation__links">
                                <Link to="/" className="header-navigation__movies text-decoration_underline">
                                    Главная
                                </Link>
                                <Link to="/movies" className="header-navigation__movies text-decoration_underline">
                                    Фильмы
                                </Link>
                                <Link to="/saved-movies" className="header-navigation__movies text-decoration_underline">
                                    Сохраненные фильмы
                                </Link>
                            </div>
                            <div className="account">
                                <Link to="/profile" className="account__button">Аккаунт</Link>
                                <div className="account__logo"></div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : ("")}
        </>
    )
}

export default HeaderLogin;