import React, { useState } from 'react';
// layout Parts
import Header from './Header';
import Footer from './Footer';
// img
import mainBG from "../assets/images/woodenBGLight.jpg"
import { SearchProvider } from '../context/SearchContext';

const Layout = ({children}) => {
    const [searchQuery,setSearchQuery]=useState("")

    return (
        <main className='relative h-[100svh]'>
        <img className='fixed z-0 w-[1500px] h-[1500px] ' src={mainBG} alt="mainBG" />
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <SearchProvider>
                <main className='abolute pt-[10svh] mb-[5svh] h-[85svh]' searchQuery={searchQuery}>
                    {children}
                </main>
            </SearchProvider>
        <Footer/>
        </main>
    );
};

export default Layout;