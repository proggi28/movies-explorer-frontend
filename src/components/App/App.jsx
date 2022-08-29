import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import React from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as auth from '../../utils/auth';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useNavigate, Navigate } from 'react-router-dom';
import mainApi from '../../utils/MainApi';
import { SERVER_ERROR_CODE } from '../../utils/constants';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [isDone, setIsDone] = useState(false);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState('');

    const handleSignUp = (email, password, name) => {
        auth
            .register(email, password, name)
            .then((data) => {
                if (data) {
                    handleSignIn(email, password)
                }
            })
            .catch((err) => {
                if(err.status === SERVER_ERROR_CODE) {
                    setError('Данный email уже зарегистрирован')
                }
            });
    };

    const handleSignIn = (email, password) => {
        auth
            .authorize(email, password)
            .then((jwt) => {
                if (jwt.token) {
                    localStorage.setItem("jwt", jwt.token);
                    setLoggedIn(true);
                    navigate("/movies");
                }
            })
            .catch((err) => {
                if (err.status === 401) {
                    setError("Неправильные почта или пароль");
                  } else {
                    console.log(err)
                    setError('Нет соединения с сервером');
                  }
                })
    };

    const handleSignOut = () => {
        setLoggedIn(false);
        localStorage.clear();
        navigate("/");
    };

    function editButtonProfile(name, email) {
        mainApi
            .saveUserInfo(name, email)
            .then((user) => {
                setCurrentUser(user);
                setIsDone(true);
                setIsError(false);
            })
            .catch(() => {
                setIsError(true);
            })
            .finally(() => {
                setIsError(false);
            });
    }

    useEffect(() => {
        const jwt = localStorage.getItem("jwt");
        if (jwt) {
            mainApi.getUserInfo(jwt)
                .then((user) => {
                    if (user) {
                        const currentRoute = location.pathname;
                        setLoggedIn(true);
                        localStorage.setItem('userId', user._id);
                        setCurrentUser(user);
                        navigate(currentRoute);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            setLoggedIn(false);
        }
    }, []);

    useEffect(() => {
        if (loggedIn) {
            mainApi.getUserInfo()
                .then(user => {
                    setCurrentUser(user);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [loggedIn]);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className='page'>
                <Routes>
                    <Route path="/" element={<><Header loggedIn={loggedIn} />
                        <Main loggedIn={loggedIn}/>
                        <Footer />
                    </>}>
                    </Route>
                    <Route path="/movies" element={<ProtectedRoute available={loggedIn}>
                        <Movies />
                    </ProtectedRoute>}>
                    </Route>
                    <Route path="/saved-movies" element={<ProtectedRoute available={loggedIn}>
                        <SavedMovies />
                    </ProtectedRoute>}>
                    </Route>
                    <Route path="/profile" element={<ProtectedRoute available={loggedIn}>
                        <Profile signOut={handleSignOut} editButtonProfile={editButtonProfile}
                            currentUser={currentUser} isError={isError} isDone={isDone} />
                    </ProtectedRoute>}>
                    </Route>
                    <Route path="/signin" element={loggedIn ? <Navigate to="/" /> :
                        <Login handleSignIn={handleSignIn} error={error} setError={setError} />
                    }>
                    </Route>
                    <Route path="/signup" element={loggedIn ? <Navigate to="/" /> :
                        <Register handleSignUp={handleSignUp} error={error} setError={setError} />
                    }>
                    </Route>
                    <Route path="*" element={<PageNotFound />}>
                    </Route>
                </Routes>
            </div>
        </CurrentUserContext.Provider>
    )
}

export default App;