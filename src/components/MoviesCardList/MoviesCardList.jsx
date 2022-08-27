import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MOVIES_1280, MOVIES_490, MOVIES_900, MOVIES_1154, MOVIES_STEP_1280, MOVIES_STEP_1154, MOVIES_STEP_490, MOVIES_STEP_900 } from "../../utils/constants";

const MoviesCardList = ({ movies }) => {
    const [showMore, setShowMore] = useState(0);
    const [step, setStep] = useState(0);
    const location = useLocation();

    const showMoreFilms = () => {
        setShowMore(showMore + step);
    }

    const setStepFilms = () => {
        const width = window.innerWidth;

        if (width) {
            setShowMore(MOVIES_1280);
            setStep(MOVIES_STEP_1280);
        }

        if (width <= 1154) {
            setShowMore(MOVIES_1154);
            setStep(MOVIES_STEP_1154);
        }

        if (width <= 900) {
            setShowMore(MOVIES_900);
            setStep(MOVIES_STEP_900);
        }

        if (width <= 490) {
            setShowMore(MOVIES_490);
            setStep(MOVIES_STEP_490);
        }
    }

    useEffect(() => {
        setStepFilms();
        window.addEventListener("resize", () => {
            setTimeout(() => {
                setStepFilms();
            }, 500);
        });
    }, []);

    return (
        <>
            <div className="movies-cards">
                <ul className="movies-cards__list">
                    {
                        movies.map((movie, index) => {
                            if (index < showMore) {
                                return (
                                    <MoviesCard key={movie.movieId || movie.id} movie={movie} />
                                )
                            } return null;
                        })
                    }
                </ul>
            </div>
            <section className="more-films">
                <div className="more-films__container">
                    {movies.length >= showMore && location.pathname !== "/saved-movies" && (
                        <button className='more-films__button' onClick={showMoreFilms}>
                            Ещё
                        </button>
                    )}
                </div>
            </section>
        </>
    )
}

export default MoviesCardList;