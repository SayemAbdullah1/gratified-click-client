import React from 'react';
import { useLoaderData } from 'react-router-dom';
import InputReview from '../pages/InputReview/InputReview';

const ViewDetails = () => {
    const serviceDetails = useLoaderData()
    const { _id, img, title, description, price } = serviceDetails;
    return (
        <div>
            <div>
                <div className='text-center mt-20 mb-20'>
                    <p className=" text-blue-600 text-5xl font-semibold">Services Details</p>
                    <hr />

                </div>
                <div className=" mt-5 mb-5 card lg:card-side bg-base-100 shadow-xl w-75">
                    <figure className='w-100'><img src={img} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p className='font-semibold'>Price: {price}</p>
                        <p>{description}</p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-auto'>
                <InputReview
                serviceDetails={serviceDetails}
                ></InputReview>
            </div>
        </div>
    );
};

export default ViewDetails;