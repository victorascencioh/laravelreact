import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
    return (
        <header>
            <Link to={'/'}>
                <span>Titulo de ejemplo</span>
            </Link>
        </header>
    );
};

export default Header;