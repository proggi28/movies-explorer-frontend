import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import HeaderLogo from '../HeaderLogo/HeaderLogo';

function Header() {

    return (
        <header className="header">
                <HeaderLogo />
            <div className="header__container">
                <Link to="/signup" className="header__register">
                    Регистрация
                </Link>
                <Link to="/signin">
                    <button className="header__signin-button">Войти</button>
                </Link>
            </div>
        </header>
    )
}

export default Header;