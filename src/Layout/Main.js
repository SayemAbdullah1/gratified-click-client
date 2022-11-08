import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Componants/shared/Footer/Footer';
import Header from '../Componants/shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;