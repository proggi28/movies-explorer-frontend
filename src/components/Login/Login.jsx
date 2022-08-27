import './Login.css';
import logo from '../../images/png/header-logo.png'
import { Link } from "react-router-dom";
import { useForm } from '../../utils/useForm';
import React, { useRef } from "react";

function Login({ handleSignIn }) {
    const loginFormRef = useRef(null);
    const form = useForm();

    const { email, password } = form.values;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email || password) {
            handleSignIn(email, password);
            loginFormRef.current.reset();
        }
    };

    return (
        <div className="login">
            <div className="login__container">
                <img src={logo} alt="Логотип сайта" className="login__logo" />
                <h2 className="login__header">Рады видеть!</h2>
                <form
                    name="login-form"
                    className="form login__form"
                    ref={loginFormRef}
                    onSubmit={handleSubmit}
                >
                    <label className="login__label-name">Email
                        <input
                            name="email"
                            id="email-input"
                            type="email"
                            value={email || ''}
                            onChange={form.handleChange}
                            className="login__input"
                            placeholder="Введите email"
                            minLength="4"
                            maxLength="40"
                            required
                            noValidate
                        />
                    </label>
                    <span className="login__error">{`${form.errors.email ? form.errors.email : ""
                        }`}</span>

                    <label className="login__label-name">Пароль
                        <input
                            name="password"
                            id="password-input"
                            type="password"
                            value={password || ''}
                            onChange={form.handleChange}
                            className="login__input"
                            placeholder="Введите пароль"
                            minLength="8"
                            required
                            noValidate
                        />
                    </label>
                    <span className="login__error">{`${form.errors.password ? form.errors.password : ""
                        }`}</span>
                    <button type="submit" className=
                        {`login__submit-button ${!form.isValid && "login__button_disabled"}`}
                        disabled={!form.isValid}>
                        Войти
                    </button>
                </form>
                <Link to="/signup" className="login__link">
                    <span className="login__signup">Ещё не зарегистрированы? </span> <span className="login__signin">Регистрация</span>
                </Link>
            </div>
        </div>
    )
}

export default Login;