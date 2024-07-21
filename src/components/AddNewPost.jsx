import React, { useState } from 'react';
// queries
import { useMutation,  useQueryClient } from '@tanstack/react-query';
// services
import { AddNewPostFunction, } from '../services/Dashbord';
import toast from 'react-hot-toast';
import { ListOfCatergories } from '../hooks/ReactQueriesHooks';
import Loader from '../modules/Loader';


const AddNewPost = () => {
    const queryClient=useQueryClient()

const {data,isLoading,isError}=ListOfCatergories()



const{mutate,isPending,error:mutatedError}=useMutation({mutationFn:(formData)=>AddNewPostFunction(formData) ,
     onSuccess:()=>queryClient.invalidateQueries(["my-posts-list"])})



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
    mutate(formData)

}
if(mutatedError) return toast.error(mutatedError)

    return (
    <>
    <section className=' fixed z-50'>
    {isPending && <Loader />}
    </section>
        <form         
            className='form sm:form_for_largePage h-[35rem] sm:w-1/3 sm:right-1/3 !top-0 backdrop-blur-sm   '
            onSubmit={addHandler} 
            onChange={changeHandler}
        >
            <h1 className='relative text-center text-white border-b-[2px] text-xl px-6 pb-3   '>افزودن آگهی</h1>
            
            <label className='darkFormLabel text-sm'  htmlFor="title">عنوان</label>
            <input className='input' type="text"
                    name='title' 
                    id='title'
                    placeholder='فروش یک عدد ...'
            />
            
            <label className='darkFormLabel text-sm' htmlFor="content">توضیحات درباره آگهی</label>
            <textarea className='input h-[100px]' name="content" id="content"/>

            <label className='darkFormLabel text-sm' htmlFor="amount">قیمت</label>
            <input className='input' type="number"
                    name='amount' 
                    id='amount'
                    placeholder='قیمت به تومان'
            />

            <label className='darkFormLabel text-sm' htmlFor="city">شهر</label>
            <input className='input' type="text"
                    name='city' 
                    id='city'
                    placeholder='تهران یا اصفهان یا ...'
            />

            <label className='darkFormLabel text-sm' htmlFor="category">دسته بندی</label>
            <select className="input w-3/4 rounded-xl" name="category" id="category">
                {isLoading&& <option className="input w-3/4">درحال بارگذاری...</option>}
                {isError&& <option className="input w-3/4">متاسفانه با مشکل مواجه شدیم... دوباره امتحان کنید</option>}
                {data?.data.map((i)=>
                <option className="input w-fit text-xs text-inherit " value={i._id} key={i._id}>{i.name}</option>
            )}
            </select>
            
            <label className='darkFormLabel text-sm' htmlFor="images">عکس محصول</label>
            <input  type="file"
                    name='images' 
                    id='images'
                    className='w-3/4 right-[12%] h-20 text-xs'
            />

            <button className='button h-10 w-3/4' disabled={isPending} type='submit'>ثبت آگهی</button>
        </form>
    </>
    );
};

export default AddNewPost;




