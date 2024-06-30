import React, { useState } from 'react';
// react query 
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
// services & utils
import { deleteCategory, getCategory } from '../services/Admin';
import Loader from '../modules/Loader';
import notify from '../utils/ToastNotify';
import ConfirmationDialog from '../modules/ConfirmationDialog';

const CategoryList = () => {

    const queryClient = useQueryClient();
    
    
    const{data,isLoading,isError}=useQuery({queryKey:["category-list"],queryFn:getCategory},)
    
    // for deleting category
        // question for deleting category
        const [ShowingQuestion, setShowingQuestin] = useState(false);
        const [doTheQuestion, setDoTheQuestion]=useState(null);
        //____question for deleting category
        const{mutate,isPending,error}=useMutation({
            mutationFn: deleteCategory,
            onSuccess: () => {
                queryClient.invalidateQueries("category-list");
            },
            onError: (error) => {
            notify(`${error.message}`, "error");
        }
        });
    
        const deleteHandler=()=>{
            setShowingQuestin(true);
        }
        const HandleConfirmDelete=(id)=>{
            mutate(id)
            setShowingQuestin(false);
        }
        const HandleCancelDelete=()=>{
            setShowingQuestin(false);
            
        }
        //_______ for deleting category
        

        if(isLoading) return <Loader text={"loading"}/>;
        if(isError)return notify(`${error.message}`,"error")
    return (
        <article>
            {
                data.data.map(data=>
                    <section key={data._id}>
                        <img src={`${data.icon}.svg`} alt={data.icon} />
                        <h5>نام :{data.name}</h5>
                        <p>اسلاگ :{data.slug}</p>
                        <button onClick={()=>deleteHandler(data._id)}>حذف</button>
                        { isPending &&
                        <section className=' ' >
                            <Loader text={"در حال حذف دسته بندی"} textColor={"lightOrange"}/>
                            <p>در حال حذف دسته بندی</p>
                        </section>
                        }
                        {/* for asking question before deleting category */}
                        <ConfirmationDialog dialogText="آیا از بابت حذف دسته بندی مطمئن هستید؟" ShowingQuestion={ShowingQuestion} HandleCancelDelete={HandleCancelDelete}
                        HandleConfirmDelete={HandleConfirmDelete}
                        />
                        {/*______ for asking question before deleting category */}
                    </section>
                )
            }
            
        </article>
    );
};

export default CategoryList;



// اول ببین چطور میتونی delete رو کامپوننت جدا بیاری
// بعد ارور حذف رو هم حل کن