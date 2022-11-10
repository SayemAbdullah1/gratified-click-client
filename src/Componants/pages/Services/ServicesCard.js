import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const { _id, img, title, description, price} = service
    // console.log(service)
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
            <figure><img src={img} alt="wedding img" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='font-semibold'>Price: {price}</p>
                <p>{description.slice(0, 100) + '...'}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}><button className="btn btn-primary">View details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;