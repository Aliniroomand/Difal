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
        <article>
            {
                data.data.map(data=>
                    <section className=' ' key={data._id}>
                        <img src={`${data.icon}.svg`} alt={data.icon} />
                        <h5>نام :{data.name}</h5>
                        <p>اسلاگ :{data.slug}</p>
                        <DeleteCategoris categoryId={data._id} />
                    </section>
                )
            }
            
        </article>
    );
};

export default CategoryList;


