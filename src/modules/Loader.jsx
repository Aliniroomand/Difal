import React from 'react';

const Loader = () => {
    return (
        <article className='absolue w-1/5 right-2/5 grid place-items-center'>
            <img className='animate-spin-slow drop-shadow-4xl inset-auto ' src='loader.svg' alt="loader image" />

        </article>
    );
};

export default Loader;