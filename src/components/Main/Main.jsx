import React from 'react';
import NavTab from '../NavTab/NavTab';
import './Main.css'
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Promo from '../Promo/Promo';

function Main() {
    return (
        <>
            <main className="content">
                <Promo />
                <NavTab />
                <AboutProject />
                <Techs />
                <AboutMe />
            </main>
        </>
    )
}

export default Main;