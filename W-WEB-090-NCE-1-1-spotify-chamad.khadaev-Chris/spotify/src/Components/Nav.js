import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='nav'>
            <ul>
                <Link to='/'>
                    <li>Albums</li>
                </Link>
                <Link to='/artists'>
                    <li>Artists</li>
                </Link>
                <Link to='/genres'>
                    <li>Genres</li>
                </Link>

            </ul>
        </div>
    );
};

export default Nav;