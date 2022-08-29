import React from "react";
import './SearchForm.css';
import logo from '../../images/svg/logo-search.svg';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function SearchForm({ handleSearch }) {
    const [inputValue, setInputValue] = useState("");
    const [shorts, setShorts] = useState(false);
    const [error, setError] = useState(false);
    const { pathname } = useLocation();

    const handleInput = (evt) => {
        setInputValue(evt.target.value);
    };

    const handleCheckbox = () => {
        setShorts(!shorts);
        handleSearch(inputValue, !shorts);
        if (pathname === "/movies") {
          localStorage.setItem("shorts", !shorts);
        }
      };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (!inputValue) {
            setError(true);
            evt.target.elements["search-query"].focus();
            return;
        }
        setError(false);
        localStorage.setItem("query", inputValue);
        handleSearch(inputValue, shorts);
    };

    useEffect(() => {
        if (pathname === "/movies") {
            const savedInputValue = localStorage.getItem("query");
            const savedShortsFilm = JSON.parse(localStorage.getItem("shorts"));
            if (savedInputValue) {
                setInputValue(savedInputValue);
            }
            if (savedShortsFilm) {
                setShorts(savedShortsFilm);
            }
            if (savedInputValue || savedShortsFilm === true) {
                handleSearch(savedInputValue, savedShortsFilm);
            }
        }
    }, [pathname]);

    return (
        <div className="search">
            <div className="search__container">
                <form name="search-form" className="search-form" onSubmit={handleSubmit}>
                    <img src={logo} alt="Логотип формы поиска" className="search__logo" />
                    <input
                        type="text"
                        id="movie-input"
                        name="search"
                        className="search__movie-input"
                        required
                        placeholder="Фильм"
                        onChange={handleInput}
                        value={inputValue}
                    />
                    <button type="submit" className="search__button">
                    </button>
                    <div className="search__short-films">
                        <FilterCheckbox value={shorts} onChange={handleCheckbox}/>
                    </div>
                </form>
                <span
                    className={`search__input-error ${!error ? "search__input-error_hidden" : ""
                        }`}
                ></span>
            </div>
        </div >
    )
}

export default SearchForm;