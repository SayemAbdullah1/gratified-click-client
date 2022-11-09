import React from 'react';
import { Link } from 'react-router-dom';

const HomeServicesCard = ({service}) => {
    const { img, title, description, price } = service
    // console.log(service)
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='font-semibold'>Price: {price}</p>
                <p>{description.slice(0, 100) + '...'}</p>
                
            </div>
        </div>
    );
};

export default HomeServicesCard;