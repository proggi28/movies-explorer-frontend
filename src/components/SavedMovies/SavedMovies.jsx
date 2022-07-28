import React from "react";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import SavedMoviesCardList from "../SavedMoviesCardList/SavedMoviesCardList";
import './SavedMovies.css';
import Footer from '../Footer/Footer'

const SavedMovies = () => {
    return (
        <div className="saved-movies">
            <Navigation />
            <SearchForm />
            <SavedMoviesCardList />
            <Footer />
        </div>
    )
}

export default SavedMovies;