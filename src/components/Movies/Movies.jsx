import React from "react";
import './Movies.css';
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from '../Footer/Footer';
import MoreFilms from '../MoreFilms/MoreFilms';

function Movies() {
    return (
        <div className="movies">
            <Navigation />
            <SearchForm />
            <MoviesCardList />
            <MoreFilms />
            <Footer /> 
        </div>
    )
}

export default Movies;