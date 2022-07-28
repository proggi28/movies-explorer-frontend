import React from "react";
import './SavedMoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import moviesCards from "../../utils/card-list";

const SavedMoviesCardList = () => {
    return (
        <div className="saved-movies-cards">
            { moviesCards.slice(0,3).map((card, index) => <MoviesCard key={index} card={card}/> ) }
        </div>
    )
}

export default SavedMoviesCardList;