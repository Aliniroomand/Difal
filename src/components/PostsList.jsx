import { useQuery } from '@tanstack/react-query';
import React from 'react';
// services
import { getMyPosts } from '../services/Dashbord';
// utils
import toast from 'react-hot-toast';
import { ChangePriceToToman } from '../utils/ChangePriceToIranToman';
import Loader from '../modules/Loader';
import DeletePosts from './DeletePosts';

const PostsList = () => {
    const baseURL=import.meta.env.VITE_BASE_URL;

    const{isLoading,data,error}=useQuery({queryKey:["my-posts-list"],queryFn:getMyPosts});
    
    if(error){return toast.error(`دریافت پست های شما با خطا مواجه شد ، دوباره امتحان کنید`)}
    if(isLoading)return <Loader text={"در حال بارگذاری لیست"}/>
    console.log({isLoading,data,error});
    return (
        <article className=' relative flex flex-col items-start justify-between gap-2 border-red-200 border-[1.5px] text-sm px-2  w-[90%] right-[5%] rounded-xl  backdrop-blur-sm bg-white bg-opacity-40'>
            <h1 className='titles absolute text-sm '>لیست پست های من</h1>
            {
                data.data.posts.map(post=>
                    <section key={post._id} className='flex sm:flex-row flex-col items-center justify-between py-2 w-full  border-red-300 border-b-[1.5px]'>
                        <section className='flex flex-row justify-start sm:items-end items-center gap-6 sm:w-1/2 w-full'>
                            <img className=' w-14 h-full' src={`${import.meta.env.VITE_BASE_URL}/${post.images}`} />
                            <section className='flex flex-col'>
                                <p className='text-md'>{post.options.title}</p>
                                <span className='text-sm text-gray-700'>{post.options.content}</span>
                            </section>
                        </section>
                        <section className='flex sm:flex-row flex-col items-center justify-center sm:items-center sm:justify-end gap-3  sm:w-1/2 w-full'>
                            <section className='grid place-items-center py-3'>
                                <p><span className='text-gray-700 text-xs'> تاریخ ایجاد:  </span>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</p>
                                <span><span className='text-gray-700 text-xs'> قیمت :  </span>{ChangePriceToToman(post.amount)}تومان</span>
                            </section>
                            <DeletePosts postId={post._id}/>
                        </section>
                    </section>
                )
            }
        </article>
    );
};

export default PostsList;