import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
// services & utils
import { getCategory } from '../services/Admin';
import Loader from '../modules/Loader';
import notify from '../utils/ToastNotify';
import DeleteCategoris from './DeleteCategoris';

const CategoryList = () => {
    
    const{data,isLoading,isError,error}=useQuery({queryKey:["category-list"],queryFn:getCategory},)
    
        const [selectedId, setSelectedId]=useState(null);


            

        if(isLoading) return <Loader text={"loading"}/>;
        if(isError)return notify(`${error.message}`,"error")
    return (
        <article className=' '> 
            <h1 className='relative text-center bg-darkRed text-red-100 w-[90%] right-[5%] rounded-2xl  '>دسته بندی ها</h1>
            {   
                data.data.map(data=>
                    <section className=' relative flex flex-row items-center justify-evenly border-red-200 border-[1.5px] text-sm px-2  w-[90%] right-[5%] rounded-xl' key={data._id}>
                        <section className='w-1/2 flex flex-row items-stretch py-4' >
                            <img className='h-[1.8cap]' src={`${data.icon}.svg`} alt={data.icon} />
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


