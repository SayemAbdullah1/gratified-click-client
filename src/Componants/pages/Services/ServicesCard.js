import React from 'react';

const ServicesCard = ({ service }) => {
    const {img, title, description, price} = service
    console.log(service)
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price: {price}</p>
                <p>{description.slice(0, 100) + '...'}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">See All</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;