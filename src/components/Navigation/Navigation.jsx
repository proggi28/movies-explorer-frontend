import React from "react";
import './Navigation.css';
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {

    const [isOpenBurger, setOpenBurger] = useState(false);

    const handleOpenBurger = () => {
        setOpenBurger(true);
    }

    const handleCloseBurger = () => {
        setOpenBurger(false);
    }

    return (
        <nav className="movies-navigation">
            <HeaderLogo />
            <div className="movies-navigation__container">
                <div className="movies-navigation__links">
                    <Link to="/movies" className="movies-navigation__movies">
                        Фильмы
                    </Link>
                    <Link to="/saved-movies" className="movies-navigation__movies">
                        Сохраненные фильмы
                    </Link>
                </div>
                <div className="account">
                    <Link to="/profile" className="account__button">Аккаунт</Link>
                    <div className="account__logo"></div>
                </div>
            </div>
            <button className="movies-navigation__burger-button" onClick={handleOpenBurger}></button>
            {isOpenBurger ? (
                <div className="movies-navigation__burger-menu">
                    <div className="movies-navigation__burger-menu_container">
                        <button className="movies-navigation__burger-menu_close" onClick={handleCloseBurger}></button>
                        <div className="movies-navigation-burger-menu_content">
                            <div className="movies-navigation__links">
                                <Link to="/" className="movies-navigation__movies text-decoration_underline">
                                    Главная
                                </Link>
                                <Link to="/movies" className="movies-navigation__movies text-decoration_underline">
                                    Фильмы
                                </Link>
                                <Link to="/saved-movies" className="movies-navigation__movies text-decoration_underline">
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
        </nav>
    )
}

export default Navigation;