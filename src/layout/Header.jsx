import React, { useContext, useState } from 'react';
// images
import { Link, Navigate, useNavigate } from 'react-router-dom';
import divarLogo from '/divar.svg'
import searchLogo from '/searchIcon.svg'
import profile from '/profile.svg'
// react queries
import {UserINFSQuery} from "../hooks/ReactQueriesHooks"
// cookie
import { setCookie } from '../utils/cookie';
import { SearchContext } from '../context/SearchContext';
// components
import SearchTab from "../modules/SearchTab"

const Header = () => {
    const { data } = UserINFSQuery();

    const[showSearchBar,setShowSearchBar]=useState(false)
console.log(showSearchBar);
    const{searchQuery,setSearchQuery}=useContext(SearchContext)


    const navigate=useNavigate()

    const ExitHandler=()=>{
        setCookie({accessToken:"",refreshToken:""})
        navigate("/auth");
        window.location.reload()
        return
        
    }
    return (
        <header className='fixed top-0 z-50 flex flex-row w-[100svw] bg-white h-[10svh] text-xs  items-center text-center backdrop-blur-sm  bg-opacity-40 right-0'>
            <section className='z-[51] flex flex-row w-1/5 left-[80%] items-center justify-start h-[10svh] sm:gap-10 gap-2  sm:px-5'>
                <Link to="/">
                    <img className='h-[10svh] w-60' src={divarLogo} alt="divarLogo" />
                </Link>

            </section>
            
            <section className='flex flex-row w-4/5 right-[20%] items-center justify-end h-[10svh] sm:gap-10 px-5 text-xs'>
                <section onClick={()=>setShowSearchBar(prev=>!prev)} className='grid place-items-center w-1/4 right-0 cursor-pointer'>
                    <img className='w-[30px]' src={searchLogo} alt="searchLogo" />
                    <h3>جستجو</h3>
                </section>
                {/* Search bar  */}
                {
                    showSearchBar &&
                    <SearchTab showSearchBar={showSearchBar} setShowSearchBar={setShowSearchBar}/>
                }
                {/*_____ Search bar  */}

                <Link className={`flex flex-row button ${data? "w-1/4" : "w-1/3"} sm:w-auto` }
                        to={`${data?.data?.role !== "ADMIN" ? "/dashbord": "/admin"}`}>
                    <img src={profile} className={`${window.innerWidth < "640" && "hidden"}`} alt="profile" />
                    <h3>{`${data?.data?.role !== "ADMIN" ? "دیوار من": " پنل ادمین" }`}</h3>
                </Link>
                <Link  className={`button ${data? "w-1/4" : "w-1/3"} sm:w-auto`} to="/dashbord">
                    ثبت آگهی
                </Link>
                {
                    data &&
                    <button 
                    className='Darkbutton w-1/5 sm:w-auto'
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