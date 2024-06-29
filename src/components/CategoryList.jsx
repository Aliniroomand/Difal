import React from 'react';
// react query 
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
// services & utils
import { deleteCategory, getCategory } from '../services/Admin';
import Loader from '../modules/Loader';
import notify from '../utils/ToastNotify';

const CategoryList = () => {
    const queryClient = useQueryClient();


        const{data,isLoading,isError}=useQuery({queryKey:["category-list"],queryFn:getCategory})
        
        // for deleting category
        const{mutate,isPending,error}=useMutation({
            mutationFn: deleteCategory,
            onSuccess: () => {
            queryClient.invalidateQueries("category-list");
            },
            onError: (error) => {
            notify(`${error.message}`, "error");
            }
            });

        const deleteHandler=(id)=>{
            mutate(id)
        }

        if(isLoading) return <Loader/>;
        if(isError)return notify(`${error.message}`,"error")
    return (
        <article>
            {
                data.data.map(data=>
                    <section key={data._id}>
                        <img src={`${data.icon}.svg`} alt={data.icon} />
                        <h5>نام :{data.name}</h5>
                        <p>اسلاگ :{data.slug}</p>
                        <h1>{data._id}</h1>
                        <button onClick={() => deleteHandler(data._id)}>حذف</button>
                    </section>
                )
            }
            
        </article>
    );
};

export default CategoryList;