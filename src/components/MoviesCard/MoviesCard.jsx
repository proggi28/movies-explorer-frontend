import React from "react";
import './MoviesCard.css';
import { useState } from "react";
import { useLocation } from "react-router-dom";

const MoviesCard = ({ card }) => {

    const { link, header } = card;

    const [isLiked, setIsLiked] = useState(false);
    const [isDelButton, setDelButton] = useState(false);
    const location = useLocation();

    function handleCardMouseOver() {
        setDelButton(true);
    }

    function handleCardMouseOut() {
        setDelButton(false);
    }

    const handleLikeButtonClick = () => {
        setIsLiked(!isLiked);
    }

    return (
        <div className="movies-card" onMouseEnter={handleCardMouseOver} onMouseLeave={handleCardMouseOut}>
            <img src={link} alt={"Фото карточки"} className="movies-card__photo" />
            <div className="movies-card__description">
                <h2 className="movies-card__header">{header}</h2>
                {location.pathname === '/saved-movies' ? (
                    <button className={`movies-card__delete-button ${isDelButton ? 'movies-card__delete-button_visible' : ''}`}
                        onClick={handleLikeButtonClick}>
                    </button>
                ) : (
                    <button className={`movies-card__like-button ${isLiked ? 'movies-card__like-button_clicked' : ''}`}
                        onClick={handleLikeButtonClick}>
                    </button>
                )}

            </div>
            <div className="movies-card__duration">1ч 42м</div>
        </div>
    )
}

export default MoviesCard;