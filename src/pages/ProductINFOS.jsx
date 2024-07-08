import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getAllPosts } from '../services/Dashbord';
import Loader from '../modules/Loader';
import postsBG from "../assets/images/paper_without_BG.png"


const ProductINFOS = () => {
    const {id}=useParams()
    const{data,isLoading,error}=useQuery({queryKey:["all-posts"],queryFn:getAllPosts});

    if(isLoading)return <Loader/>;
    if(error) toast.error("بارگذاری با خطا مواجه شده است")

    const productINF=data.data.posts.find(i=>i._id === id)
    console.log(productINF);
    return (
        <section className='relative h-[89svh] w-1/3 right-1/3 bg-slate-500'>
            <img src={postsBG} className='absolute z-0 h-full w-full wobble_animation' alt="" />
            <h1>{productINF.options.title}</h1>
            <img src={`${import.meta.env.VITE_BASE_URL}/${productINF.images}`} alt="" />
       <p></p>
        </section>
    );
};

export default ProductINFOS;