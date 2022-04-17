import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = (props) => {

    const { id, name, fee, description, img } = props.service;

    const navigate = useNavigate();

    const navigateToServiceDetail = (id) => {
        navigate(`/service/${id}`);
    }

    return (
        <div className='col'>
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">${fee}</p>
                    <button onClick={()=> navigateToServiceDetail(id)} className='btn btn-info'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;