import React from 'react';
import NavTab from '../NavTab/NavTab';
import './Main.css'
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Promo from '../Promo/Promo';

function Main() {

    return (
        <div className="content">
            <Promo />
            <NavTab />
            <AboutProject />
            <Techs />
            <AboutMe />
        </div>
    )
}

export default Main;