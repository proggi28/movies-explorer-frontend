import React from 'react';
import './Header.css';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import HeaderRegister from '../HeaderRegister/HeaderRegister';

const Header = ({ loggedIn }) => {
    return (
        <>
            <header className="header">
                <HeaderLogo />
                {loggedIn ? <HeaderLogin /> : <HeaderRegister />}
            </header>
        </>
    )
}

export default Header;