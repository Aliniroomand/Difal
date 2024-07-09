import React from 'react';
// services
import Loader from '../modules/Loader';
import toast from 'react-hot-toast';
// images
 import sidebarBGRight from '../assets/images/paper without BG.png'
 import sidebarBGTop from '../assets/images/category_mobile_BG.png'
 
import { ListOfCatergories } from '../hooks/ReactQueriesHooks';

const MainSidebar = ({filterByCategory,setFilterByCategory}) => {
    
    const{data,isLoading,error}=ListOfCatergories()
    if(isLoading) return <Loader />
    if(error) return toast.error(`در دریافت دسته بندی ها مشکلی پیش آمده`)

    const clickHandler=(e)=>{
        const {id}=e.target;
       setFilterByCategory(id);
    }
    console.log();

    return (
        <aside className='fixed md:w-52 md:h-[50svh]'>
            <img className="fixed w-full h-28 right-0 md:top-[20svh] md:h-[50svh] z-0 md:w-56 md:right-3" src={window.innerWidth <= "768" ? sidebarBGTop : sidebarBGRight} alt="sidebarBG" />
            <ul onClick={clickHandler}  className='relative h-28 w-[90%] right-0 overflow-x-scroll z-10 top-0 flex-row items-center md:top-[14svh] flex md:flex-col md:w-48 md:gap-1 md:right-6 md:h-[42svh] md:overflow-y-scroll md:overflow-x-hidden'>
                <li  className='titles w-full relative my-2 text-xs h-6 self-start '>دسته بندی ها</li>
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