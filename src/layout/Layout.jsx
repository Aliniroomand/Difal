import React from 'react';
// layout Parts
import Header from './Header';
import Footer from './Footer';
// img
import mainBG from "../assets/images/woodenBGLight.jpg"

const Layout = ({children}) => {
    return (
        <>
        <img className='fixed z-0 w-[1500px] h-[1500px] ' src={mainBG} alt="mainBG" />
        <Header/>
        <main className='relative h-svh pt-[10svh] top-0 w-full '>
            {children}
        </main>
        <Footer/>
        </>
    );
};

export default Layout;