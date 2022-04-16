import React from 'react';
import './Footer.css'
const Footer = () => {
    const today= new Date();
    const year= today.getFullYear();
    return (
        <div>
            <p className='text-center'><small>copyright @ {year} </small></p>
        </div>
    );
};

export default Footer;