import React, { useState } from 'react';
// react query stuffs
import { useMutation, useQueryClient } from '@tanstack/react-query';
// services
import { addToCategory } from '../services/Admin';
// utils
import notify from '../utils/ToastNotify';
import { ToastContainer } from 'react-toastify';

const CategoryForm = () => {
    const queryClient=useQueryClient()
    const [form,setForm]=useState({
        name:"",
        slug:"",
        icon:"",
    })

    const{ mutate, isPending , error, data,isError}=useMutation({ mutationFn:addToCategory,onSuccess :()=>queryClient.invalidateQueries("category-list")});



    const changeHandler=(e)=>{

        setForm({...form,[e.target.name]:e.target.value})
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        if(!form.name || !form.slug || !form.icon ) {
            notify("لطفا تمام فیلد هارو وارد کنید","error");
            return
        }
        mutate(form);
            return
    }
    
    return (
        <form 
        onChange={changeHandler} 
        onSubmit={submitHandler}
        className='form'
        >
            { (data?.status === 201) && <h3 className='bg-red-700 px-6 rounded-2xl text-red-100'>دسته بندی با موفقیت افزوده شد</h3>}
            <h1 className='text-xl'>افزودن دسته بندی</h1>
            {isPending&& <h1>در حال افزودن دسته بندی</h1>}
            <label className='formLabel'htmlFor="name">اسم دسته بندی</label>
            <input className='input' defaultValue="" type="text" id='name' name='name' />

            <label className='formLabel' htmlFor="slug">اسلاگ</label>
            <input className='input' type="text" name='slug' id='slug' />

            <label className='formLabel' htmlFor="icon">آیکن</label>
            <input className='input' type="text" name='icon' id='icon' />

            <button disabled={isPending} className='Darkbutton w-2/3 mt-6' type='submit'>ایجاد</button>
            <ToastContainer/>
        </form>
    );
};

export default CategoryForm;