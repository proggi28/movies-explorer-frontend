import React from "react";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import './SavedMovies.css';
import Footer from '../Footer/Footer';
import { useEffect, useState } from "react";
import searchMovieFilter from "../../utils/searchMovieFilter";
import Preloader from "../Preloader/Preloader";
import mainApi from "../../utils/MainApi";

const SavedMovies = () => {
    const [movies, setMovies] = useState(JSON.parse(localStorage.getItem('savedMovies')) || []);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSearch = (query, isShort) => {
        setLoading(true);
        setErrorMessage('');
        const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
        const filtered = searchMovieFilter(savedMovies, query, isShort);

        if (filtered.length === 0) {
            setErrorMessage('Ничего не найдено');
        }
        setMovies(filtered);
        setLoading(false);
    };

    useEffect(() => {
        setLoading(true);
        mainApi.getUserSaveMovies()
            .then((savedMovies) => {
                const user = localStorage.getItem('userId');
                const otherMovies = savedMovies.filter((film) => film.owner === user);
                localStorage.setItem('savedMovies', JSON.stringify(otherMovies));
                setLoading(false);
                if (savedMovies.length === 0) {
                    setErrorMessage('Вы еще ничего не добавили в избранное');
                }
            })
            .catch((err) => {console.log(err)});
    }, []);

    return (
        <div className="saved-movies">
            <Navigation />
            <SearchForm handleSearch={handleSearch} />
            {loading ? <Preloader/> : <MoviesCardList movies={movies} errorMessage={errorMessage} />}
            <Footer />
        </div>
    )
}

export default SavedMovies;