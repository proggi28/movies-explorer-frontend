import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';

function App() {
    return (
        <div className='page'>
            <Switch>
                <Route exact path="/">
                    <Header />
                    <Main />
                    <Footer />
                </Route>
                <Route path="/signin">
                    <Login />
                </Route>
                <Route path="/signup">
                    <Register />
                </Route>
            </Switch>
            <Route path="/error">
                <PageNotFound />
            </Route>
            <Route path="/movies">
                <Movies />
            </Route>
            <Route path="/saved-movies">
                <SavedMovies />
            </Route>
            <Route path="/profile">
                <Profile />
            </Route>
        </div>

    )
}

export default App;