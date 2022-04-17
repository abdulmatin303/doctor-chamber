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
            <div class="card w-50  mx-auto">
                <img src={foundDetails?.img} class="card-img-top w-50" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{foundDetails?.name}</h5>
                    <p class="card-text">${foundDetails?.fee}</p>
                    <p class="card-text">${foundDetails?.description}</p>
                    <button className='btn btn-info'>Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;