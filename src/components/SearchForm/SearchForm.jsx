import React from "react";
import './SearchForm.css';
import logo from '../../images/svg/logo-search.svg';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {

    return (
        <div className="search">
            <div className="search__container">
                <form name="search-form" className="search-form">
                    <img src={logo} alt="Логотип формы поиска" className="search__logo" />
                    <label>
                        <input
                            type="text"
                            id="movie-input"
                            name="search"
                            className="search__movie-input"
                            placeholder="Фильм"
                            minLength="4"
                            required
                        />
                    </label>
                    <button className="search__button">
                    </button>
                    <div className="search__short-films">
                        <FilterCheckbox />
                    </div>
                </form>
            </div>
        </div >
    )
}

export default SearchForm;