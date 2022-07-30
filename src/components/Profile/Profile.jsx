import React from "react";
import './Profile.css';
import Navigation from '../Navigation/Navigation';
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <>
            <div className="profile">
                <Navigation />
                <h2 className="profile__title">Привет, Игорь!</h2>
                <div className="profile__data profile__data_border">
                    <p className="profile__name-title profile__font-style">
                        Имя
                    </p>
                    <p className="profile__name-text profile__font-style">
                        Игорь
                    </p>
                </div>
                <div className="profile__data">
                    <p className="profile__email-title profile__font-style">
                        E-mail
                    </p>
                    <p className="prfoile__email-text profile__font-style">
                        majjor16@mail.ru
                    </p>
                </div>
                <button className="profile__button-edit">Редактировать</button>
                <Link className="profile__link" to="/signin">Выйти из аккаунта</Link>
            </div>
        </>
    )
}

export default Profile;