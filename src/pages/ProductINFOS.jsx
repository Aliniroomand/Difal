import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// RTK
import { useDispatch, useSelector } from 'react-redux';
import  favoriteStore, { favoritesStore }  from '../features/FavoriteSlice';
import { AddOrRemoveFavorite } from '../features/FavoriteSlice';
// utils
import { ChangePriceToToman } from '../utils/ChangePriceToIranToman';
import Loader from '../modules/Loader';
// query
import { AllProductsQuery } from '../hooks/ReactQueriesHooks';
// images
import postsBG from "../assets/images/paper_without_BG.png"
import goBack from "/exit.svg"
import deActivedFavorite from "/deActivedFavorite.svg"
import activedFavorite from "/activedFavorite.svg"



const ProductINFOS = () => {
    const {id}=useParams()
    const store=useSelector(favoritesStore)
    const dispatch=useDispatch()

    // for checking is available in favorites or not
    const isInFavoritesOrNot=store.findIndex(i=>i===id)
    // ____________for checking is available in favorites or not
    
    const{data,isLoading,error}=AllProductsQuery()
    const navigate=useNavigate()
    if(isLoading)return <Loader/>;
    if(error) toast.error("بارگذاری با خطا مواجه شده است")

    const productINF=data.data.posts.find(i=>i._id === id)
    return (
        <section className=' relative -top-[3svh] sm:w-1/3 sm:right-1/3 wobble_animation '>
            <img src={postsBG} className='absolute z-0 h-[89svh] w-full ' alt="" />
            <section className='absolute top-[70svh] left-3 z-50 w-20 h-20 text-xs flex flex-col items-start justify-evenly'
            >
                <button className='flex  Darkbutton hover:text-gray-300 w-20' onClick={()=>navigate(-1)}>
                    <img src={goBack} alt="goBack" />بازگشت 
                </button>
                <button onClick={()=>dispatch(AddOrRemoveFavorite(id))} className='flex Darkbutton hover:text-gray-300 w-20 '>
                <img src={`${isInFavoritesOrNot===-1 ? deActivedFavorite : activedFavorite }`}  alt="favorite" /> {`${isInFavoritesOrNot ===-1 ? "پسندیدم" : "حذف" }`}
                </button>
            </section>
            <section className='absolute top-10 w-full h-full
             flex flex-col items-center justify-start '>

                <img className='maskForImages' src={`${import.meta.env.VITE_BASE_URL}/${productINF.images}`} alt="" />

                <h1 className='titles'>{productINF?.options?.title}</h1>
                <p className='text-darkBrown font-extrabold '>توضیحات :</p>
                <p>{productINF?.options?.content}</p>
                
                <p className='text-darkBrown font-extrabold '>تاریخ ایجاد:</p>
                <p>{new Date(productINF?.updatedAt).toLocaleDateString("fa-IR")}</p>

                <p className='text-darkBrown font-extrabold '>قیمت:</p>
                <p>{ChangePriceToToman(productINF?.amount)} تومان</p>

                <p className='text-darkBrown font-extrabold '>موقعیت مکانی:</p>
                <p>{(productINF?.options?.city)}</p>

            </section>
        </section>
    );
};

export default ProductINFOS;