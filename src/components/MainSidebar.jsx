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
        <aside className=' relative  BG sm:w-1/5 top-[10svh] h-[40svh] flex flex-col items-center content-end'>
            <img className="fixed top-[20svh] h-[42svh] z-0 sm:w-1/5" src={sidebarBG} alt="sidebarBG" />
            <h1>دسته بندی ها</h1>
            <section  className='z-10 flex flex-col w-[70%] right-[15%] h-full gap-1'>

                {data.data.map(data=>
                    <section key={data._id} className='flex flex-row items-start justify-start gap-3'  value={data._id} >
                        <img src={`${data.icon}.svg`} alt="category icon" />
                        <p >{data.name}</p>
                    </section>
            )}
            </section>
        </aside>
    );
};

export default MainSidebar;