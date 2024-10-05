import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-b-c-1.jpg';

const Logo = () => {
    return (
        <Link to='/'>
            <img
                src={logo}
                alt='ŻELAZNOWSKA - beauty clinic'
                width='300'
                loading="lazy"
            />
        </Link>
    )
};

export default Logo;