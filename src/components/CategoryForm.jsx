import React, { useState } from 'react';
// react query stuffs
import { useMutation, useQueryClient } from '@tanstack/react-query';
// services
import { addToCategory } from '../services/Admin';
// toast
import toast from 'react-hot-toast';

const CategoryForm = () => {
    const queryClient=useQueryClient()
    const [form,setForm]=useState({
        name:"",
        slug:"",
        icon:"",
    })

    const{ mutate, isPending , error, data}=useMutation({ mutationFn:addToCategory,onSuccess :()=>queryClient.invalidateQueries(["category-list"])});



    const changeHandler=(e)=>{

        setForm({...form,[e.target.name]:e.target.value})
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        if(!form.name || !form.slug || !form.icon ) {
            toast.error("لطفا تمام فیلد هارو وارد کنید");
            return
        }
        mutate(form);
            return
    }
    if(error) return toast.error(error)
    return (
        <form 
        onChange={changeHandler} 
        onSubmit={submitHandler}
        className='form  !top-0 backdrop-blur-sm sm:w-1/3 sm:right-1/3 h-full overflow-y-scroll'
        >
            { (data?.status === 201) && <h3 className='bg-red-700 px-6 rounded-2xl text-red-100'>دسته بندی با موفقیت افزوده شد</h3>}
            {isPending&& <h1 className='bg-red-100 px-6 rounded-2xl text-red-700'>در حال افزودن دسته بندی</h1>}

            <h1 className='text-xl darkFormLabel border-b-2 mb-4 pb-4'>افزودن دسته بندی</h1>

            
            <label className='darkFormLabel text-sm'htmlFor="name">اسم دسته بندی</label>
            <input className='input' defaultValue="" type="text" id='name' name='name' />

            <label className='darkFormLabel text-sm' htmlFor="slug">اسلاگ</label>
            <input className='input' type="text" name='slug' id='slug' />

            <label className='darkFormLabel text-sm' htmlFor="icon">آیکن</label>
            <input className='input' type="text" name='icon' id='icon' />

            <button disabled={isPending} className='button w-2/3 mt-6' type='submit'>ایجاد</button>
        </form>
    );
};

export default CategoryForm;