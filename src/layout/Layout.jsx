import React from 'react';
// layout Parts
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <>
        <Header/>
        <main className='relative h-svh pt-[10svh] top-0 w-full '>
            {children}
        </main>
        <Footer/>
        </>
    );
};

export default Layout;