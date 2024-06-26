import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { getCategory } from '../services/Admin';

const AddNewPost = () => {
const {data,isLoading,isError}=useQuery({queryKey:["category-list"],queryFn:getCategory})

const [form,setForm]=useState({
    title:"",
    content:"",
    category:"",
    city:"",
    price:null,
    images:null,
})

const changeHandler=(e)=>{
    const name=e.target.name;
    if(name !== "images"){
        setForm({...form,[name]:e.target.value})
    } else{
        setForm({...form,[name]:e.target.files[0]})
    }

}

const submitHandler=(e)=>{
    e.preventDefault();
    console.log(form);
}

    return (
        <form         
            className='form h-[30rem] backdrop-blur-sm'
            onSubmit={submitHandler} 
            onChange={changeHandler}
        >
            <h1 className='relative text-center bg-white text-xl px-6 bg-opacity-40 rounded-2xl '>افزودن آگهی</h1>
            
            <label className='formLabel text-sm'  htmlFor="title">عنوان</label>
            <input className='input' type="text"
                    name='title' 
                    id='title'
                    placeholder='فروش یک عدد ...'
            />
            
            <label className='formLabel text-sm' htmlFor="content">توضیحات درباره آگهی</label>
            <textarea className='input h-[100px]' name="content" id="content"/>

            <label className='formLabel text-sm' htmlFor="price">قیمت</label>
            <input className='input' type="text"
                    name='price' 
                    id='price'
                    placeholder='قیمت به تومان'
            />

            <label className='formLabel text-sm' htmlFor="city">شهر</label>
            <input className='input' type="text"
                    name='city' 
                    id='city'
                    placeholder='تهران یا اصفهان یا ...'
            />

            <label className='formLabel text-sm' htmlFor="category">دسته بندی</label>
            <select className="input w-3/4" name="category" id="category">
                {isLoading&& <option className="input w-3/4">درحال بارگذاری...</option>}
                {isError&& <option className="input w-3/4">متاسفانه با مشکل مواجه شدیم... دوباره امتحان کنید</option>}
                {data?.data.map((i)=>
                <option className="input w-3/4" value={i._id} key={i._id}>{i.name}</option>
            )}
            </select>
            
            <label className='formLabel text-sm' htmlFor="images">عکس محصول</label>
            <input  type="file"
                    name='images' 
                    id='images'
                    className='w-3/4 right-[12%] h-20 text-xs'
            />

            <button className='button  w-3/4' type='submit'>ثبت آگهی</button>
        </form>
    );
};

export default AddNewPost;