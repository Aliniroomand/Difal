import React from 'react';
import { ChangePriceToToman } from '../utils/ChangePriceToIranToman';
import DeletePosts from './DeletePosts';

const MyPost = ({post}) => {
    return (
        <section  className='relative flex sm:flex-row flex-col items-center justify-between py-2 w-full  border-red-300 border-b-[1.5px]'>
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
            <DeletePosts postId={post._id} post_title={post?.options?.title}/>
    </section>
    );
};

export default MyPost;