import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './serviceDetail.css';

const ServiceDetail = () => {

    const {serviceId} = useParams();

    const [bookDetail, setBookDetail]=useState([])

    useEffect(()=>{
    fetch('/services.json')
    .then(res=>res.json())
    .then(data=>setBookDetail(data))
     },[])

     const foundDetails= bookDetail.find(singleBook=>singleBook.id===Number(serviceId))
    //  console.log(foundDetails);

    return (
        <div>
            <h3>Details {serviceId}</h3>
            <div className="card w-50  mx-auto">
                <img src={foundDetails?.img} className="card-img-top w-50" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{foundDetails?.name}</h5>
                    <p className="card-text">${foundDetails?.fee}</p>
                    <p className="card-text">${foundDetails?.description}</p>
                    <button className='btn btn-info'>Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;