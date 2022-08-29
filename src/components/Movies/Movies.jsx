import React from "react";
import './Movies.css';
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import searchMovieFilter from "../../utils/searchMovieFilter";
import { useState, useEffect } from 'react';
import { moviesApi } from '../../utils/MoviesApi';
import mainApi from "../../utils/MainApi";
import { MOVIES_ERROR } from "../../utils/constants";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const filter = (query, shorts) => {
        const userMovies = JSON.parse(localStorage.getItem('movies'));
        const filteredMovies = searchMovieFilter(userMovies, query, shorts);
        if (filteredMovies.length === 0) {
          setErrorMessage('Ничего не найдено');
        }
        setMovies(filteredMovies);
        setLoading(false);
      };
    
      const handleSearch = (query, shorts) => {
        setLoading(true);
        setErrorMessage('');
    
        const userMovies = JSON.parse(localStorage.getItem('movies'));
        if (!userMovies) {
          moviesApi.getMovies()
            .then((films) => {
              localStorage.setItem('movies', JSON.stringify(films));
              filter(query, shorts);
            })
            .catch(() => {
              setErrorMessage(MOVIES_ERROR);
            });
        } else {
          filter(query, shorts);
        }
      };

    useEffect(() => {
        const savedMovies = localStorage.getItem('savedMovies');
        if (!savedMovies) {
          setLoading(true);
          mainApi.getUserSaveMovies()
            .then((films) => {
              if (films.length > 0) {
                localStorage.setItem('savedMovies', JSON.stringify(films));
              }
              setLoading(false);
            })
            .catch(() => {
              setErrorMessage(MOVIES_ERROR);
            });
        }
      }, []);

    return (
        <div className="movies">
            <Navigation />
            <SearchForm handleSearch={handleSearch} />
            {loading ? <Preloader /> : <MoviesCardList  movies={movies} errorMessage={errorMessage} />}
            <Footer /> 
        </div>
    )
}

export default Movies;