import React from 'react';
import { Link } from 'react-router-dom';

const OtherInHome = () => {
    return (
        <div className="hero min-h-screen bg-blue-200 mt-2 mb-5 rounded">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <p className="py-6">We are providing very premeum service with quality product. Our main vision is to customer satisfection. </p>
                    <Link to='/services'><button className="btn btn-primary">See Our Services</button></Link>
                </div>
            </div>
        </div>
    );
};

export default OtherInHome;