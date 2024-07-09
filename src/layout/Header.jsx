import React from 'react';
// images
import { Link, Navigate, useNavigate } from 'react-router-dom';
import divarLogo from '/divar.svg'
import location from '/location.svg'
import profile from '/profile.svg'
// react queries
import {UserINFSQuery} from "../hooks/ReactQueriesHooks"
// cookie
import { setCookie } from '../utils/cookie';


const Header = () => {
    const { data } = UserINFSQuery();

    const navigate=useNavigate()

    const ExitHandler=()=>{
        setCookie({accessToken:"",refreshToken:""})
        navigate("/auth");
        window.location.reload()
        return
        
    }
    return (
        <header className='fixed top-0 z-50 flex flex-row w-full bg-white h-[10svh] text-xs  items-center text-center backdrop-blur-sm  bg-opacity-40 right-0'>
            <section className='z-[51] flex flex-row w-1/2 left-1/2 items-center justify-start h-[10svh] gap-10 px-5'>
                <Link to="/">
                    <img className='sm:h-[10svh] h-[5svh]' src={divarLogo} alt="divarLogo" />
                </Link>
                <section className='flex flex-row items-center justify-start'>
                    <img className='w-[30px]' src={location} alt="location" />
                    <h3>تهران</h3>
                </section>
            </section>
            
            <section className='flex flex-row w-1/2 right-1/2 items-center justify-end h-[10svh] gap-10 px-5 '>
                <Link className='flex flex-row button' 
                        to={`${data?.data?.role !== "ADMIN" ? "/dashbord": "/admin"}`}>
                    <img src={profile} alt="profile" />
                    <h3>{`${data?.data?.role !== "ADMIN" ? "دیوار من": " پنل ادمین"}`}</h3>
                </Link>
                <Link  className='button' to="/dashbord">
                    ثبت آگهی
                </Link>
                {
                    data &&
                    <button 
                    className='Darkbutton'
                    onClick={ExitHandler}    
                    >
                    خروج
                </button>
                }

            </section>

        </header>
    );
};

export default Header;