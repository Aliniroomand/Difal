import React from 'react';
// images
import divarLogo from '../assets/images/public/divar.svg'
import location from '../assets/images/public/location.svg'
import profile from '../assets/images/public/profile.svg'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className='fixed z-50 flex flex-row w-svw bg-lightOrange px-5 h-[10svh] text-sm items-center'>
            <section className='flex flex-row w-1/2 items-center justify-start h-[10svh] gap-10'>
                <Link className='' to="/">
                    <img className='h-[10svh] ' src={divarLogo} alt="divarLogo" />
                </Link>
                <section className='flex flex-row items-center justify-start'>
                    <img className='w-[30px]' src={location} alt="location" />
                    <h3>تهران</h3>
                </section>
            </section>
            
            <section className='flex flex-row w-1/2 items-center justify-end h-[10svh] gap-10'>
                <Link className='flex flex-row' to="/auth">
                    <img src={profile} alt="profile" />
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