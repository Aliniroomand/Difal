import React, { useState } from 'react';
// images
import { Link, useNavigate } from 'react-router-dom';
import divarLogo from '/divar.svg'
import profile from '/profile.svg'
import favorite from '/deActivedFavorite.svg'
import exit from '/exit.svg'

// react queries
import {UserINFSQuery} from "../hooks/ReactQueriesHooks"
// cookie
import { setCookie } from '../utils/cookie';

const Header = () => {
    const { data } = UserINFSQuery();
    const[showingUserPanel,setShowingUserPanel]=useState(false)






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



                <section  className={`flex flex-row button ${data? "w-1/4" : "w-1/3"} sm:w-auto` }
                        >
                    <img src={profile} className={`${window.innerWidth < "640" && "hidden"}`} alt="profile" />
                    <section  
                        onMouseEnter={()=>{setShowingUserPanel(true)}}
                        onClick={()=>{setShowingUserPanel(true)}}
                        className='relative'
                    >
                        <section className=' text-nowrap relative'>
                            {`${data?.data?.role !== "ADMIN" ? "دیوار من": " پنل ادمین" }`}
                            {
                                showingUserPanel &&
                                <section 
                                    onMouseLeave={()=>{setShowingUserPanel(false)}}
                                    onMouseEnter={()=>{setShowingUserPanel(true)}}
                                    className='absolute top-[7svh] w-44 left-0 h-fit bg-white bg-opacity-80  flex flex-col items-center justify-between gap-3 p-4 rounded-2xl flex-nowrap z-[55]'>
                                    <section className='flex hover:opacity-70 '>
                                        <img src={profile} alt="" />
                                        <Link to={`${data?.data?.role !== "ADMIN" ? "/dashbord": "/admin"}`}>رفتن به
                                        {`${data?.data?.role !== "ADMIN" ? " دیوار من": " پنل ادمین" }`}
                                        </Link>
                                    </section>

                                    <section className=' flex  hover:opacity-70 z-[100] '>
                                    <img  src={favorite} alt="favorite" />
                                    <Link to={"/favorites"}>
                                    لیست علاقه مندی ها
                                    </Link>
                                    </section>
                                    <section className='flex  hover:opacity-70 '>
                                        <img src={exit} alt="exit" />
                                        <p 
                                        className=' w-1/5 sm:w-auto'
                                        onClick={ExitHandler}    
                                        >
                                            {data? "خروج" : "ورود" }
                                        </p>
                                    </section>
                                    
                                </section>
                            }
                        </section>


                    </section>
                </section>
                <Link  className={`button ${data? "w-1/4" : "w-1/3"} sm:w-auto`} to="/dashbord">
                    ثبت آگهی
                </Link>


            </section>

        </header>
    );
};

export default Header;