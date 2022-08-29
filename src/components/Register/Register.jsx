import React, { useRef } from "react";
import './Register.css';
import logo from '../../images/png/header-logo.png'
import { Link } from "react-router-dom";
import { useForm } from "../../utils/useForm";

const Register = ({ handleSignUp, error }) => {
    const registerFormRef = useRef(null);
    const form = useForm();

    const { name, email, password } = form.values;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email && password && name) {
            handleSignUp(email, password, name);
            registerFormRef.current.reset();
        }
    };

    return (
        <div className="register">
            <div className="register__container">
                <img src={logo} alt="Логотип сайта" className="register__logo" />
                <h2 className="register__header">Добро пожаловать!</h2>
                <form
                    name="register-form"
                    className="form register__form"
                    ref={registerFormRef}
                    onSubmit={handleSubmit}
                    noValidate
                >   <label className="register__label-name">Имя
                        <input
                            name="name"
                            id="name-input"
                            type="text"
                            value={name || ''}
                            onChange={form.handleChange}
                            className="register__input"
                            placeholder="Введите имя"
                            minLength="4"
                            maxLength="40"
                            required
                        />
                    </label>
                    <span className="register__error">{`${form.errors.name ? form.errors.name : ""
                        }`}</span>
                    <label className="register__label-name">Email
                        <input
                            name="email"
                            id="email-input"
                            type="email"
                            value={email || ''}
                            onChange={form.handleChange}
                            className="register__input"
                            placeholder="Введите email"
                            minLength="4"
                            maxLength="40"
                            required
                        />
                    </label>
                    <span className="register__error">{`${form.errors.email ? form.errors.email : ""
                        }`}</span>
                    <label className="register__label-name">Пароль
                        <input
                            name="password"
                            id="password-input"
                            type="password"
                            value={password || ''}
                            onChange={form.handleChange}
                            className="register__input"
                            placeholder="Введите пароль"
                            minLength="8"
                            required
                        />
                    </label>
                    <span className="register__error">
                        {`${form.errors.password ? form.errors.password : ""}`}
                    </span>
                    {error ? <span className="text__error">{error}</span> : ""}
                    <button type="submit" className=
                        {`register__submit-button ${!form.isValid && "register__button_disabled"}`}
                        disabled={!form.isValid}>
                        Зарегистрироваться
                    </button>
                </form>
                <Link to="/signin" className="register__link">
                    <span className="register__signup">Уже зарегистрированы? </span> <span className="register__signin">Войти</span>
                </Link>
            </div>
        </div>
    )
}

export default Register;