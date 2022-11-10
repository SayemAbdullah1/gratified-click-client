import React from 'react';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices';
import ServiceProvide from './ServiceProvide';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <HomeServices></HomeServices>
            <ServiceProvide></ServiceProvide>
        </div>
    );
};

export default Home;