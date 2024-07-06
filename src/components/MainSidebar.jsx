import React from 'react';
// queries
import { useQuery } from '@tanstack/react-query';
// services
import { getCategory } from '../services/Admin';
import Loader from '../modules/Loader';
import toast from 'react-hot-toast';
// images
 import sidebarBG from '../assets/images/paper without BG.png'

const MainSidebar = () => {
    const{data,isLoading,error}=useQuery({queryKey:["category-list"],queryFn:getCategory})
    
    if(isLoading) return <Loader/>
    if(error) return toast.error(`در دریافت دسته بندی ها مشکلی پیش آمده`)

    return (
        <aside className='fixed sm:w-52 sm:h-[50svh]'>
            <img className="fixed top-[20svh] sm:h-[50svh] z-0 sm:w-56 right-3" src={sidebarBG} alt="sidebarBG" />
            <ul  className='relative z-10 top-[14svh] flex flex-col sm:w-48 gap-1 right-6 sm:h-[42svh] overflow-y-scroll'>
                <li className='titles my-2 text-xs'>دسته بندی ها</li>
                <li value="all">
                    <section  className='flex flex-row items-start justify-start gap-3'>
                        <img src="all.svg" alt="all categories" />
                        <p>همه</p>
                    </section>
                </li>
                {data.data.map(data=>
                    <li key={data._id} className='flex flex-row items-start justify-start gap-3'  value={data._id} >
                        <img src={`${data.icon}.svg`} alt="" />
                        <p >{data.name}</p>
                    </li>
            )}
            </ul>
        </aside>
    );
};

export default MainSidebar;