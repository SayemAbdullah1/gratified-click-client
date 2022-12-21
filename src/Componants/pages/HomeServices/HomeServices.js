import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeServicesCard from './HomeServicesCard';

const HomeServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='mb-5'>
            <div className='text-center mt-20 mb-20'>
                <p className=" text-blue-600 text-5xl font-semibold mx-12"> Our Services</p>
                <p className='mt-9'>The majority have suffered alteration in some form,
                    <br />
                    by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 mb-5'>
                {
                    services.map(service => <HomeServicesCard
                        key={service._id}
                        service={service}
                    
                    ></HomeServicesCard>
                    )
                }
            </div>
            <div className='text-center'>
                <Link to='/services'><button className="btn btn-outline">See All</button></Link>
            </div>

        </div>
    );
};

export default HomeServices;