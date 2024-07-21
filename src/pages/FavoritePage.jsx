import React from 'react';
import { AllProductsQuery } from '../hooks/ReactQueriesHooks';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../modules/Loader';
import { ChangePriceToToman } from '../utils/ChangePriceToIranToman';
import { AddOrRemoveFavorite, favoritesStore } from '../features/FavoriteSlice';

const FavoritePage =  () => {
    const dispatch=useDispatch()
    const favoriteList=useSelector((store)=>store.favorites)
    const {data,isLoading}= AllProductsQuery()

    if(isLoading) return <Loader/>;


    const favoriteDatas = data?.data?.posts?.filter(post => favoriteList.includes(post._id)) || [];
console.log(favoriteDatas);

    return (
        <article className=' relative flex flex-col items-start justify-between gap-2 border-red-200 border-[1.5px] text-sm px-2  w-[90%] right-[5%] rounded-xl  backdrop-blur-sm bg-white bg-opacity-40 z-40'>
            <h1 className='titles absolute text-sm max-w-1/3 min-w-fit right-1/3 left-1/3 h-fit text-nowrap '>لیست علاقه مندی ها</h1>
            {
            favoriteDatas?.map((post,index)=>
            <section  className={`relative flex sm:flex-row flex-col items-center justify-between py-2 w-full  border-red-300 border-b-[1.5px] ${index === 0 && "pt-10" } `}>
                <section className='flex flex-row justify-start sm:items-end items-center gap-6 sm:w-1/2 w-full'>
                    <img className=' w-14 h-full' src={`${import.meta.env.VITE_BASE_URL}/${post.images}`} />
                    <section className='flex flex-col'>
                        <p className='text-md'>{post?.options?.title}</p>
                        <span className='text-sm text-gray-700'>{post?.options?.content}</span>
                    </section>
                </section>
                <section className='flex sm:flex-row flex-col items-center justify-center sm:items-center sm:justify-end gap-3  sm:w-1/2 w-full'>
                    <section className='grid place-items-center py-3'>
                        <p><span className='text-gray-700 text-xs'> تاریخ ایجاد:  </span>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</p>
                        <span><span className='text-gray-700 text-xs'> قیمت :  </span>{ChangePriceToToman(post.amount)}تومان</span>
                    </section>
                </section>
            <button onClick={()=>dispatch(AddOrRemoveFavorite(post._id))} className='flex Darkbutton  hover:text-gray-300  bg-lightOrange  hover:bg-black w-fit sm:mx-3 my-1'>
                حذف
            </button>
            </section>
                )
            }
        </article>
    );
};

export default FavoritePage;