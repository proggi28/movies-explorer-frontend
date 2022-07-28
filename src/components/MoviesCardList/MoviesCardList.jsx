import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import moviesCards from "../../utils/card-list";

const MoviesCardList = () => {
    return (
        <div className="movies-cards">
            <ul className="movies-cards__list">
                {
                    moviesCards.map((card, index) => {
                        return <MoviesCard key={index} card={card} />
                    })
                }
            </ul>
        </div>
    )
}

export default MoviesCardList;