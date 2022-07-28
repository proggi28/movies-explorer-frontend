import React from "react";
import './Login.css';
import logo from '../../images/png/header-logo.png'
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login">
            <div className="login__container">
                <img src={logo} alt="Логотип сайта" className="login__logo" />
                <h2 className="login__header">Рады видеть!</h2>
                <form
                    name="login-form"
                    className="form login__form"
                >
                    <label className="login__label-name">Email
                        <input
                            name="email"
                            id="email-input"
                            type="email"
                            className="login__input form__input input input_type_email"
                            placeholder="Введите email"
                            minLength="4"
                            maxLength="40"
                            required
                        />
                    </label>
                    <span className="form__input-error email-input-error"></span>

                    <label className="login__label-name">Пароль
                        <input
                            name="password"
                            id="password-input"
                            type="password"
                            className="login__input form__input input input_type_password"
                            placeholder="Введите пароль"
                            minLength="2"
                            maxLength="40"
                            required
                        />
                    </label>
                    <span className="form__input-error password-input-error"></span>

                    <button type="submit" className="login__submit-button form__submit">
                        Войти
                    </button>
                </form>
                <Link exact to="/signup" className="login__link">
                    <span className="login__signup">Ещё не зарегистрированы? </span> <span className="login__signin">Регистрация</span>
                </Link>
            </div>
        </div>
    )
}

export default Login;