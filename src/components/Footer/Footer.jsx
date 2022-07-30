import React from 'react';
import './Footer.css'

function Footer() {

    return (
        <footer className="footer">
            <div className="footer__container">
                <h1 className="footer__header">Учебный проект Яндекс.Практикум х BeatFilm.</h1>
                <div className="footer__navigation">
                    <div className="footer__date">© {new Date().getFullYear()}</div>
                    <ul className="footer__link-list">
                        <li><a className="footer__link" href="https://practicum.yandex.ru/profile/web/" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
                        <li><a className="footer__link" href="https://github.com/" target="_blank" rel="noreferrer">Github</a></li>
                        <li><a className="footer__link" href="http://facebook.com/" target="_blank" rel="noreferrer">Facebook</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;