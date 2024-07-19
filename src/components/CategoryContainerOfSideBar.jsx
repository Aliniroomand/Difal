import React from 'react';
// services
import Loader from '../modules/Loader';
import toast from 'react-hot-toast';
// images
 import sidebarBGRight from '../assets/images/paper without BG.png'
 import sidebarBGTop from '../assets/images/category_mobile_BG.png'
import { ListOfCatergories } from '../hooks/ReactQueriesHooks';
 
const CategoryContainerOfSideBar = ({filterByCategory,setFilterByCategory}) => {

    const scrollLeft = () => {
        document.getElementById('scroll-section').scrollBy({
            left: -200,
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        document.getElementById('scroll-section').scrollBy({
            left: 200,
            behavior: 'smooth',
        });}


        const{data,isLoading,error}=ListOfCatergories()
        if(isLoading) return <Loader />
        if(error) return toast.error(`در دریافت دسته بندی ها مشکلی پیش آمده`)
    
        const clickHandler=(e)=>{
            const {id}=e.target;
           setFilterByCategory(id);
        }
    
    return (
        <>
        <img className="fixed w-full h-28 right-0 sm:top-[20svh] sm:h-[50svh] z-0 sm:w-56 sm:right-3" src={window.innerWidth <= "640" ? sidebarBGTop : sidebarBGRight} alt="sidebarBG" />
        <ul  className='relative z-50 h-28 w-[80%] right-[10%] top-0 flex-col items-center sm:top-[9svh] flex  sm:w-48 sm:gap-1 sm:right-6 sm:h-[43svh] overflow-x-hidden overflow-y-scroll'>
            <li  className='sm:titles titles_withoutBG w-full right-0 my-2 text-xs h-6 self-start '>دسته بندی ها</li>
            <section id='scroll-section' className=' scroll flex sm:flex-col flex-row w-full right-0 text-sm sm:overflow-x-hidden justify-start overflow-x-scroll overflow-y-hidden show-scrollbar '>
{/* buttons for scrolling */}
            {window.innerWidth <= "640" &&
            <button onClick={scrollLeft} className='text-2xl font-extrabold rounded-full fixed  text-center w-6 h-32 left-2 top-[12svh] hover:scale-110 transition-all z-[60]' >←</button>
        }
            {window.innerWidth <= "640" &&
            <button onClick={scrollRight} className=' text-2xl font-extrabold rounded-full fixed w-6 h-32 top-[12svh] right-2 hover:scale-110  transition-all z-[60] '>→</button>
        }
{/* buttons for scrolling */}
            <li  onClick={clickHandler} className={`flex flex-row items-start justify-start sm:gap-3 transition-all cursor-pointer ${ filterByCategory === "all" && ' text-darkBrown -translate-x-1'}  `} id="all">
                    <img id="all" src="all.svg" className={` transition-all ${ filterByCategory === "all" && 'brightness-200 scale-150 -translate-x-1 ' } hidden sm:block`} alt="all categories" />
                    <p className=' border-l-2 sm:border-none px-2 border-darkBrown' id="all" >همه</p>
            </li>
            {data.data.map(data=>
                <li onClick={clickHandler}  key={data._id} className={`flex flex-row items-start justify-start gap-3 transition-all cursor-pointer ${ filterByCategory === data._id && ' text-darkBrown -translate-x-1' } `}  id={data._id}>
                    <img width="20px" id={data._id} src={`${data.icon}.svg`} onError={(e)=>{e.currentTarget.src="ErrorImageNoText.svg"}} className={` transition-all ${ filterByCategory === data._id && 'brightness-200 scale-150 -translate-x-1 '  } hidden sm:block`}  alt="" />
                    <p className='border-l-2 sm:border-none px-2 border-darkBrown w-fit text-nowrap' id={data._id} >{data.name}</p>
                </li>
        )}
        </section>
        </ul>
        </>
    );
};

export default CategoryContainerOfSideBar;