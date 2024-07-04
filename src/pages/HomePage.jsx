import React from 'react';
import MainSidebar from '../components/MainSidebar';
import MainComponent from '../components/MainComponent';

const HomePage = () => {
    return (
        <main className='flex flex-row'>
            <MainSidebar/>
            <MainComponent/>
        </main>
    );
};

export default HomePage;