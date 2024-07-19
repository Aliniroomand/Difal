import React, { useState } from 'react';
// components
import CategoryForm from '../components/CategoryForm';
import CategoryList from '../components/CategoryList';
import PostsList from '../components/PostsList';
import Loader from '../modules/Loader';
import AddNewPost from '../components/AddNewPost';
import { MyPostsListQuery } from '../hooks/ReactQueriesHooks';

const AdminPage = () => {

    const{data,isLoading,error}=MyPostsListQuery()
    
    const ExitHandler=()=>{
        setCookie({accessToken:"",refreshToken:""})
        navigate("/auth");
        window.location.reload()
        return
    
    
    }
    
    const [showItem,setShowItem]=useState({
        categoryList:false,
        categoryForm:false,
        myPosts:false,
        addPost:false
    })
    if(isLoading)return <Loader />
    if(error){return toast.error(`دریافت پست های شما با خطا مواجه شد ، دوباره امتحان کنید`)}
    return (
        <section className='absolute flex flex-col  items-start  w-full h-[85svh]  z-10' >
            <section className='h-28  flex flex-row  sm:w-full text-xs sm:text-sm text-nowrap w-full sm:right-1/3 items-center justify-center sm:gap-4 '>

                <button className={`Darkbutton  h-11 ${showItem.categoryList ? "bg-black text-white" : "bg-white text-black"}`}
                        onClick={()=>setShowItem({categoryList:true})}
                >
                    لیست دسته بندی ها
                </button>
                <button className={`Darkbutton  h-11 ${showItem.categoryForm ? "bg-black text-white" : "bg-white text-black"}`}
                        onClick={()=>setShowItem({categoryForm:true})}
                >
                    افزودن دسته بندی 
                </button>
                <button className={`Darkbutton  h-11 ${showItem.myPosts ? "bg-black text-white" : "bg-white text-black"}`}
                        onClick={()=>setShowItem({myPosts:true})}
                >
                    پست های من
                </button>
                <button className={`Darkbutton  h-11 ${showItem.addPost ? "bg-black text-white" : "bg-white text-black"}`}
                        onClick={()=>setShowItem({addPost:true})}
                >
                    افزودن پست 
                </button>
                <button className={`Darkbutton bg-lightBrown  text-center flex justify-center items-center`} onClick={ExitHandler} >
                    <img src="exit.svg" alt="" />
                خروج
                </button>
            </section>
            <section className='relative w-[80%] right-[10%] h-full '>

                {showItem.categoryList?
                    <CategoryList/>:
                    showItem.categoryForm?
                    <CategoryForm/>:
                    showItem.myPosts?
                    <PostsList posts={data} />:
                    showItem.addPost?
                    <AddNewPost/>:
                    null
                }
            </section>
        </section>
    );
};

export default AdminPage;