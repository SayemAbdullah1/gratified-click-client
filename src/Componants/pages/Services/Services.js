import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect( ()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    } , [])

    return (
        <div>
            <div className='text-center mt-20 mb-20'>
                <p className=" text-blue-600 text-5xl font-semibold"> Our Services</p>
                <p>The majority have suffered alteration in some form,
                    <br />
                     by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 mb-5'>
                {
                    services.map(service => <ServicesCard
                    key={service._id}
                    service={service}
                    ></ServicesCard>)
                }
            </div>
            
        </div>
    );
};

export default Services;