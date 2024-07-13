import React, { useState } from 'react';
// layout Parts
import Header from './Header';
import Footer from './Footer';
// img
import mainBG from "../assets/images/woodenBGLight.jpg"


const Layout = ({children}) => {


    return (
        <main className='relative h-[100svh]'>
        <img className='fixed z-0 w-[1500px] h-[1500px] ' src={mainBG} alt="mainBG" />
        <Header />
        
                <main className='abolute pt-[10svh] mb-[5svh] h-[85svh]' >
                    {children}
                </main>
            
        <Footer/>
        </main>
    );
};

export default Layout;