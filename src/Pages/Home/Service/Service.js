import React from 'react';
import './Service.css'
const Service = (props) => {
    
    const {id, name, fee, description, img} = props.service;

    return (
        <div className='col-md-4'>
            <p>{name}</p>
            <img src={img} alt="" />
        </div>
    );
};

export default Service;