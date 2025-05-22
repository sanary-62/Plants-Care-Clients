import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import React from 'react';

const MainLayout = () => {
    return (
        <div>
            <Header />
     <div className='max-w-7xl mx-auto'>
         <Outlet />
     </div>
        </div>
    );
};

export default MainLayout;