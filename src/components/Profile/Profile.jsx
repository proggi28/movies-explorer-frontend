import React from "react";
import './Profile.css';
import Navigation from '../Navigation/Navigation';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useForm } from "../../utils/useForm";

const Profile = ({ signOut, editButtonProfile, isError, isDone }) => {
    const currentUser = useContext(CurrentUserContext);
    const [disabled, setDisabled] = useState(true);

    const form = useForm();
    const { email, name } = form.values;

    useEffect(() => {
        form.setValues({
            email: currentUser.email,
            name: currentUser.name,
        });
    }, [currentUser]);

    const submitEditProfile = (event) => {
        event.preventDefault();
        editButtonProfile(name, email);
    };

    useEffect(() => {
        const { name, email } = form.values;
        if (
            form.isValid &&
            (currentUser.name !== name || currentUser.email !== email)
        ) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [form.values, currentUser]);

    return (
        <>
            <div className="profile">
                <Navigation />
                <h2 className="profile__title">Привет, {currentUser && currentUser.name}!</h2>
                <form className="profile__form" onSubmit={submitEditProfile}>
                    <label className="profile__label">
                        <span className="profile__name">Имя</span>
                        <input
                            className="profile__input"
                            type="text"
                            name="name"
                            onChange={form.handleChange}
                            value={name || ''}
                            minLength="2"
                            maxLength="40"
                            required
                        />
                    </label>
                    <span className="profile__error">{`${form.errors.name ? form.errors.name : ""
                        }`}</span>
                    <label className="profile__label">
                        <span className="profile__name">E-mail</span>
                        <input
                            className="profile__input"
                            type="email"
                            name="email"
                            onChange={form.handleChange}
                            value={email || ''}
                            minLength="2"
                            maxLength="40"
                            required
                        />
                    </label>
                    <span className="profile__error">{`${form.errors.email ? form.errors.email : ""
                        }`}</span>
                    {isError && (
                        <p className="profile__error">Что-то пошло не так</p>
                    )}
                    {isDone && (
                        <p className="profile__error">Ваш профиль успешно обновлен</p>
                    )}
                    <button type="submit" className={`profile__button-edit ${disabled && 'profile__button-edit_disabled'}`} disabled={disabled}>Редактировать</button>
                </form>
                <Link className="profile__link" to="/signin" onClick={signOut}>Выйти из аккаунта</Link>
            </div>
        </>
    )
}

export default Profile;