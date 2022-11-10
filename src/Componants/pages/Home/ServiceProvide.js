import React from 'react';
import img from '../../assets/pic/home.jpg'

const ServiceProvide = () => {
    return (
        
        <div>
            <h2 className=' mb-6 text-blue-600 text-5xl font-semibold text-center '>Service we are providing</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl mt-20 mb-12">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl font-semibold text-center">List of our services</h2>

                    <p className='p-4 text-1xl'>
                        <ul>
                            <li>Photograph</li>
                            <li>Video</li>
                            <li>Special Moment click</li>
                            <li>Stage photography</li>
                            <li>LovesTruck photography</li>
                        </ul>
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">All services</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceProvide;