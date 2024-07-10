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
        <aside className='fixed w-[100svw] sm:w-52 sm:h-[50svh]'>
            <img className="fixed w-full h-28 right-0 sm:top-[20svh] sm:h-[50svh] z-0 sm:w-56 sm:right-3" src={window.innerWidth <= "768" ? sidebarBGTop : sidebarBGRight} alt="sidebarBG" />
            <ul onClick={clickHandler}  className='relative z-50 h-28 w-[70%] right-[10%] top-0 flex-col items-center sm:top-[14svh] flex  sm:w-48 sm:gap-1 sm:right-6 sm:h-[42svh] sm:overflow-y-scroll sm:overflow-x-hidden'>
                <li  className='sm:titles titles_withoutBG w-full right-0 my-2 text-xs h-6 self-start '>دسته بندی ها</li>
                <section className='flex sm:flex-col flex-row  w-[80%] right-[10%] text-sm overflow-x-scroll justify-center  '>

                <li  className={`flex flex-row items-start justify-start gap-3 transition-all cursor-pointer ${ filterByCategory === "all" && ' text-darkBrown -translate-x-1'}  `} id="all">
                        <img id="all" src="all.svg" className={` transition-all ${ filterByCategory === "all" && 'brightness-200 scale-150 -translate-x-1 ' } invisible sm:visible`} alt="all categories" />
                        <p className=' border-l-2 sm:border-none px-2 border-darkBrown' id="all" >همه</p>
                </li>
                {data.data.map(data=>
                    <li key={data._id} className={`flex flex-row items-start justify-start gap-3 transition-all cursor-pointer ${ filterByCategory === data._id && ' text-darkBrown -translate-x-1' } `}  id={data._id}>
                        <img width="20px" id={data._id} src={`${data.icon}.svg`} onError={(e)=>{e.currentTarget.src="ErrorImageNoText.svg"}} className={` transition-all ${ filterByCategory === data._id && 'brightness-200 scale-150 -translate-x-1 '  } invisible sm:visible`}  alt="" />
                        <p className='border-l-2 sm:border-none px-2 border-darkBrown' id={data._id} >{data.name}</p>
                    </li>
            )}
            </section>
            </ul>
        </aside>
    );
};

export default MainSidebar;