import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getAllPosts } from '../services/Dashbord';
import Loader from '../modules/Loader';

const ProductINFOS = () => {
    const {id}=useParams()
    const{data,isLoading,error}=useQuery({queryKey:["all-posts"],queryFn:getAllPosts});
    if(isLoading)return <Loader/>;
    if(error) toast.error("بارگذاری با خطا مواجه شده است")

    const productINF=data.data.posts.find(i=>i._id === id)
    console.log(productINF);
    return (
        <section>
       {/* <h1>{productINF.options.title}</h1> */}
       <img src={`${import.meta.env.VITE_BASE_URL}/${productINF.images}`} alt="" />
       <p></p>
        </section>
    );
};

export default ProductINFOS;