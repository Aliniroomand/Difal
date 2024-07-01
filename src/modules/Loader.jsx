import React from 'react';

const Loader = ({text}) => {
    return (
        <article className='absolue w-1/5 right-2/5 grid place-items-center'>
               <h1 className="text-xl text-lightOrange drop-shadow-4xl" >{text}</h1>

            <img className='animate-spin-slow drop-shadow-4xl inset-auto ' src='loader.svg' alt="loader image" />

        </article>
    );
};

export default Loader;