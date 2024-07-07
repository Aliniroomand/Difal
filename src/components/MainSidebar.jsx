import React from 'react';
// queries
import { useQuery } from '@tanstack/react-query';
// services
import { getCategory } from '../services/Admin';
import Loader from '../modules/Loader';
import toast from 'react-hot-toast';
// images
 import sidebarBG from '../assets/images/paper without BG.png'

const MainSidebar = ({filterByCategory,setFilterByCategory}) => {
    
    const{data,isLoading,error}=useQuery({queryKey:["category-list"],queryFn:getCategory})
    if(isLoading) return <Loader />
    if(error) return toast.error(`در دریافت دسته بندی ها مشکلی پیش آمده`)

    const clickHandler=(e)=>{
        const {id}=e.target;
       setFilterByCategory(id);
    }

    return (
        <aside className='fixed sm:w-52 sm:h-[50svh]'>
            <img className="fixed top-[20svh] sm:h-[50svh] z-0 sm:w-56 right-3" src={sidebarBG} alt="sidebarBG" />
            <ul onClick={clickHandler}  className='relative z-10 top-[14svh] flex flex-col sm:w-48 gap-1 right-6 sm:h-[42svh] overflow-y-scroll overflow-x-hidden'>
                <li  className='titles relative my-2 text-xs h-6'>دسته بندی ها</li>
                <li  className={`flex flex-row items-start justify-start gap-3 transition-all cursor-pointer ${ filterByCategory === "all" && ' text-darkBrown -translate-x-1' } `} id="all">
                        <img id="all" src="all.svg" className={` transition-all ${ filterByCategory === "all" && 'brightness-200 scale-150 -translate-x-1 ' }`} alt="all categories" />
                        <p id="all" >همه</p>
                </li>
                {data.data.map(data=>
                    <li key={data._id} className={`flex flex-row items-start justify-start gap-3 transition-all cursor-pointer ${ filterByCategory === data._id && ' text-darkBrown -translate-x-1' } `}  id={data._id}>
                        <img width="20px" id={data._id} src={`${data.icon}.svg`} onError={(e)=>{e.currentTarget.src="ErrorImageNoText.svg"}} className={` transition-all ${ filterByCategory === data._id && 'brightness-200 scale-150 -translate-x-1 ' }`}  alt="" />
                        <p id={data._id} >{data.name}</p>
                    </li>
            )}
            </ul>
        </aside>
    );
};

export default MainSidebar;