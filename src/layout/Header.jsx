import React from 'react';
// images
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className='sticky top-0 z-50 flex flex-row max-w-full bg-white h-[10svh] text-xs  items-center text-center backdrop-blur-sm bg-white bg-opacity-40 right-0'>
            <section className='z-[51] flex flex-row w-1/2 left-1/2 items-center justify-start h-[10svh] gap-10 px-5'>
                <Link to="/">
                    <img className='sm:h-[10svh] h-[5svh]' src="divar.svg" alt="divarLogo" />
                </Link>
                <section className='flex flex-row items-center justify-start'>
                    <img className='w-[30px]' src='location.svg' alt="location" />
                    <h3>تهران</h3>
                </section>
            </section>
            
            <section className='flex flex-row w-1/2 right-1/2 items-center justify-end h-[10svh] gap-10 px-5 '>
                <Link className='flex flex-row button' to="/auth">
                    <img src='profile.svg' alt="profile" />
                    <h3>دیوار من</h3>
                </Link>
                <Link className='button' to="/dashbord">
                    ثبت آگهی
                </Link>
            </section>

        </header>
    );
};

export default Header;