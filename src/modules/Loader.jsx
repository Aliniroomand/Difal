import React from 'react';

const Loader = () => {
    return (
        <article className='absolute w-1/3 right-1/3'>
            <img className='animate-spin-slow drop-shadow-4xl inset-auto ' src='loader.svg' alt="loader image" />

        </article>
    );
};

export default Loader;