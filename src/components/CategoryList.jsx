import React, { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
// services & utils
import { getCategory } from '../services/Admin';
import Loader from '../modules/Loader';
import DeleteCategoris from './DeleteCategoris';
// toast
import toast from 'react-hot-toast';

const CategoryList = () => {
    const{data,isLoading,isError,error}=useQuery({queryKey:["category-list"],queryFn:getCategory })
    

            

        if(isLoading) return <Loader text={"loading"}/>;
        if(isError)return toast.error(`${error.message}`)
    return (
        <article className=' relative flex flex-col items-start justify-between border-red-200 border-[1.5px] text-sm px-2  w-[90%] right-[5%] rounded-xl  backdrop-blur-sm bg-white bg-opacity-40'> 
            <h1 className='titles h-7 absolute my-2'>دسته بندی ها</h1>
            {   
                data.data.map((data ,index) =>
                    <section className={`flex flex-row items-center justify-between w-full ${index === 0 && 'pt-10'}`} key={data._id}>
                        <section className='w-1/2  flex flex-row items-stretch py-4' >
                            <img className=' h-[1.8cap]' src={`${data.icon}.svg`} alt="" />
                            <h5>{data.name}</h5>
                        </section>
                        <section className='flex flex-row items-center justify-between w-1/2'>
                            <p>slug: {data.slug}</p>
                            <DeleteCategoris categoryId={data._id} />
                        </section>
                    </section>
                )
            }
            
        </article>
    );
};

export default CategoryList;


