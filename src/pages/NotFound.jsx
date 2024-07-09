import React from 'react';

import notFoundIMG from "../assets/images/404-notFound.png"
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <article className='relative w-full h-full flex flex-col justify-start items-center text-center bg-white bg-opacity-0 backdrop-blur-sm'>
            <h1 className='text-4xl'>به نظر میاد گم شدی... <br/>
            </h1>
            <Link to="/" className='button'>
                برای برگشت اینجا رو کلیک کن
            </Link>
            <img src={notFoundIMG}  alt="notFoundIMG" />
        </article>
    );
};

export default NotFound;