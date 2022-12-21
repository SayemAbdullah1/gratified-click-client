import React from 'react';
import banner from '../../assets/banner/banner5.png'

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row mt-32">
                <img src={banner} className="rounded-lg lg:w-1/2" alt='' />
                <div className='px-12'>
                    <h1 className="text-5xl text-blue-500 font-bold">Wedding photograph service!</h1>
                    <p className="py-6">We provided a trusted and secured system which provide you to get Premium quality service. We are with you!</p>
                    {/* <PrimaryButton>Getting Started</PrimaryButton> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;