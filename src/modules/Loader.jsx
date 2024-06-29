import React from 'react';
import loaderimg from "../assets/images/public/loader.svg"
const Loader = () => {
    return (
        <article className='fixed h-[33svh] top-[30svh] w-svw grid place-items-center'>
            <h1 className='text-5xl text-lightBrown drop-shadow-4xl '>LOADING</h1>
            <img className='animate-spin-slow drop-shadow-4xl' src={loaderimg} alt="loader image" />

        </article>
    );
};

export default Loader;