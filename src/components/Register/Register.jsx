import React from "react";
import './Register.css';
import logo from '../../images/png/header-logo.png'
import { Link } from "react-router-dom";

function Register() {
    return (
        <div className="register">
            <div className="register__container">
                <img src={logo} alt="Логотип сайта" className="register__logo" />
                <h2 className="register__header">Добро пожаловать!</h2>
                <form
                    name="register-form"
                    className="form register__form"
                >   <label className="register__label-name">Имя
                        <input
                            name="name"
                            id="name-input"
                            type="text"
                            className="register__input form__input input input_type_name"
                            placeholder="Введите имя"
                            minLength="4"
                            maxLength="40"
                            required
                        />
                    </label>
                    <span className="form__input-error email-input-error"></span>

                    <label className="register__label-name">Email
                        <input
                            name="email"
                            id="email-input"
                            type="email"
                            className="register__input form__input input input_type_email"
                            placeholder="Введите email"
                            minLength="4"
                            maxLength="40"
                            required
                        />
                    </label>
                    <span className="form__input-error email-input-error"></span>

                    <label className="register__label-name">Пароль
                        <input
                            name="password"
                            id="password-input"
                            type="password"
                            className="register__input form__input input input_type_password"
                            placeholder="Введите пароль"
                            minLength="2"
                            maxLength="40"
                            required
                        />
                    </label>
                    <span className="form__input-error password-input-error"></span>

                    <button type="submit" className="register__submit-button form__submit">
                        Зарегистрироваться
                    </button>
                </form>
                <Link exact to="/signin" className="register__link">
                    <span className="register__signup">Уже зарегистрированы? </span> <span className="register__signin">Войти</span> 
                </Link>
            </div>
        </div>
    )
}

export default Register;