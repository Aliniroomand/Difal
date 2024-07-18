import React, { useState } from 'react';
import AddNewPost from '../components/AddNewPost';
import PostsList from '../components/PostsList';
import toast from 'react-hot-toast';
import Loader from '../modules/Loader';
import  {MyPostsListQuery}  from '../hooks/ReactQueriesHooks';

const DashbordPage = () => {
    const{data,isLoading,error}=MyPostsListQuery()
    const[showItem,setShowItem]=useState({
        addPost:false,
        myPosts:false,
    })

    if(error){return toast.error(`دریافت پست های شما با خطا مواجه شد ، دوباره امتحان کنید`)}
    if(isLoading)return <Loader text={"در حال بارگذاری لیست"}/>


    return (
        <section className='absolute flex flex-col  items-start  w-full h-[85svh]  z-10'>

            <section className='h-[15%]  flex flex-col w-full items-center justify-evenly '>
                <button className='button' onClick={()=>setShowItem({addPost:true})} >
                لیست پستهای من
                </button>
                <button className='button' onClick={()=>setShowItem({myPosts:true})} >
                افزودن پست جدید
                </button>
            </section>

            <section className='relative w-[80%] right-[10%] h-[85%] '>
                {showItem.myPosts?
                    <AddNewPost /> :
                    showItem.addPost?
                    <PostsList posts={data} /> :
                    null

                }
            </section>
        </section>
    );
};

export default DashbordPage;