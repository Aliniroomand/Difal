import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getAllPosts } from '../services/Dashbord';
import Loader from '../modules/Loader';
import postsBG from "../assets/images/paper_without_BG.png"
import { AllProductsQuery } from '../hooks/ReactQueriesHooks';
import { ChangePriceToToman } from '../utils/ChangePriceToIranToman';


const ProductINFOS = () => {
    const {id}=useParams()
    const{data,isLoading,error}=AllProductsQuery()

    if(isLoading)return <Loader/>;
    if(error) toast.error("بارگذاری با خطا مواجه شده است")

    const productINF=data.data.posts.find(i=>i._id === id)
    return (
        <section className=' relative h-[89svh] sm:w-1/3 sm:right-1/3 wobble_animation'>
            <img src={postsBG} className='absolute z-0 h-[91svh] w-full ' alt="" />
            <section className='absolute top-14 w-full h-fit
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