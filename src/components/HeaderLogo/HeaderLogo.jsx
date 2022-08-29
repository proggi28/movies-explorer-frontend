import React from "react";
import './HeaderLogo.css';
import logo from '../../images/svg/header-logo.svg'
import { Link } from "react-router-dom";

const HeaderLogo = () => {
    return (
        <Link to="/">
            <img src={logo} alt="Логотип сайта" className="header__logo" />
        </Link>
    )
}

export default HeaderLogo;