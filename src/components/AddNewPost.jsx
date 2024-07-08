import React, { useState } from 'react';
// queies
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
// api services
import { getCategory } from '../services/Admin';
import { AddNewPostFunction, getMyPosts } from '../services/Dashbord';
import toast from 'react-hot-toast';


const AddNewPost = () => {
    const queryClient=useQueryClient(["my-posts-list"])
const {data,isLoading,isError}=useQuery({queryKey:["category-list"],queryFn:getCategory})



const{mutate,isPending,isError:mutatedIsError}=useMutation({mutationFn:(formData)=>AddNewPostFunction(formData) , onSuccess:()=>queryClient.invalidateQueries(["my-posts-list"])})



const [form,setForm]=useState({
    title:"",
    content:"",
    category:"",
    city:"",
    amount:null,
    images:null,
})

const changeHandler=(e)=>{
    const name=e.target.name;
    if(name !== "images"){
        setForm({...form,[name]:e.target.value})
    } else{
        setForm({...form,[name]:e.target.files})
    }
    
}

const addHandler=(e)=>{
    e.preventDefault();
    const formData=new FormData();
    
    if(!form.title || !form.content || form.amount===null || !form.city || !form.images.length ){
        return toast.error("لطفا تمامی مقادیر را وارد کنید")
    }

    for (let key in form) {
        if (key === "images") {
          for (let i = 0; i < form.images.length; i++) {
            formData.append("images", form.images[i]);
          }
        } else {
          formData.append(key, form[key]);
        }
      }
    // AddNewPostFunction(formData)
    mutate(formData)

    console.log(formData)
}


    return (
        <form         
            className='form h-[30rem] top-96 backdrop-blur-sm'
            onSubmit={addHandler} 
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

            <label className='formLabel text-sm' htmlFor="amount">قیمت</label>
            <input className='input' type="number"
                    name='amount' 
                    id='amount'
                    placeholder='قیمت به تومان'
            />

            <label className='formLabel text-sm' htmlFor="city">شهر</label>
            <input className='input' type="text"
                    name='city' 
                    id='city'
                    placeholder='تهران یا اصفهان یا ...'
            />

            <label className='formLabel text-sm' htmlFor="category">دسته بندی</label>
            <select className="input w-3/4 rounded-xl" name="category" id="category">
                {isLoading&& <option className="input w-3/4">درحال بارگذاری...</option>}
                {isError&& <option className="input w-3/4">متاسفانه با مشکل مواجه شدیم... دوباره امتحان کنید</option>}
                {data?.data.map((i)=>
                <option className="input w-3/4 " value={i._id} key={i._id}>{i.name}</option>
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




