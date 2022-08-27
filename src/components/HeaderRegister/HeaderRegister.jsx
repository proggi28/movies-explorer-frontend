import React from "react";
import { Link } from "react-router-dom";
import './HeaderRegister.css';

function HeaderRegister() {
    return (
        <div className="header__container">
            <Link to="/signup" className="header__register">
                Регистрация
            </Link>
            <Link to="/signin">
                <button className="header__signin-button">Войти</button>
            </Link>
        </div>
    )
}

export default HeaderRegister;