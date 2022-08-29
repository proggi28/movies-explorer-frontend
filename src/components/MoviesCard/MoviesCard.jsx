import React from "react";
import './MoviesCard.css';
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import mainApi from "../../utils/MainApi";

const MoviesCard = ({ movie }) => {

    const { duration, image, nameRU, trailerLink } = movie;
    const [liked, setLiked] = useState(false);
    const [likedId, setLikedId] = useState('');
    const [isDelButton, setDelButton] = useState(false);
    const location = useLocation();

    function handleCardMouseOver() {
        setDelButton(true);
    }

    function handleCardMouseOut() {
        setDelButton(false);
    }

    function getTimeFromMins(mins) {
        let hours = Math.trunc(mins/60);
        let minutes = mins % 60;
        return hours + 'ч ' + minutes + 'м';
    };

    const handleSetSaved = (evt) => {
        if (!liked) {
          const newMovie = {};
          const { image, id } = movie;
          Object.assign(newMovie, movie);
          delete newMovie.id;
          delete newMovie.created_at;
          delete newMovie.updated_at;
    
          Object.entries(newMovie).forEach((key) => {
            if (!key[1]) {
              newMovie[key[0]] = '...';
            }
          });
          mainApi.saveMovie({
            ...newMovie,
            image: `https://api.nomoreparties.co/${image.url}`,
            thumbnail: `https://api.nomoreparties.co/${image.formats.thumbnail.url}`,
            movieId: id,
          })
            .then((savedMovie) => {
              setLiked(true);
              setLikedId(savedMovie._id);
              let savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
              if (!savedMovies) {
                savedMovies = [];
              }
              savedMovies.push(savedMovie);
              localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
            })
            .catch((err) => {
              if (err.status === 400) {
                console.log(err);
              } else {
                console.log(err);
              }
            });
        } else {
          mainApi.deleteMovie(likedId)
            .then(() => {
              setLiked(false);
              const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
              let index = 0;
              for (let i = 0; i < savedMovies.length; i += 1) {
                const film = savedMovies[i];
                if (film._id === movie._id) {
                  index = i;
                }
              }
              savedMovies.splice(index, 1);
              localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
              if (location.pathname === '/saved-movies') {
                evt.target.closest('.movies-card').remove();
              }
            })
            .catch((err) => console.log(err));
        }
      };
    
      useEffect(() => {
        const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
        if (savedMovies) {
          savedMovies.forEach((savedMovie) => {
            if (savedMovie.movieId === movie.id || savedMovie._id === movie._id) {
              setLiked(true);
              setLikedId(savedMovie._id);
            }
          });
        }
      }, [movie._id, movie.id]);

    return (
        <div className="movies-card" onMouseEnter={handleCardMouseOver} onMouseLeave={handleCardMouseOut}>
            <a href={trailerLink}><img src={location.pathname === '/movies' ? `https://api.nomoreparties.co/${image.url}` : image} alt={"Фото карточки"} className="movies-card__photo" /></a>
            <div className="movies-card__description">
                <h2 className="movies-card__header">{nameRU}</h2>
                {location.pathname === '/saved-movies' ? (
                    <button className={`movies-card__delete-button ${isDelButton ? 'movies-card__delete-button_visible' : ''}`}
                        onClick={handleSetSaved}>
                    </button>
                ) : (
                    <button className={`movies-card__like-button ${liked ? 'movies-card__like-button_clicked' : ''}`}
                        onClick={handleSetSaved} >
                    </button>
                )}

            </div>
            <div className="movies-card__duration">{getTimeFromMins(duration)}</div>
        </div>
    )
}

export default MoviesCard;