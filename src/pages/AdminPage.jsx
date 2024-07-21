import React, { useEffect, useState } from 'react';
// components
import CategoryForm from '../components/CategoryForm';
import CategoryList from '../components/CategoryList';
import PostsList from '../components/PostsList';
import Loader from '../modules/Loader';
import AddNewPost from '../components/AddNewPost';
import { MyPostsListQuery } from '../hooks/ReactQueriesHooks';
import { setCookie } from '../utils/cookie';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {

    const{data,isLoading,error}=MyPostsListQuery()
    
const navigate=useNavigate()

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

// for handling Add post of header 
useEffect(()=>{

    const query=new URLSearchParams(location.search)
    if(query.get("view")==="addPost"){
        setShowItem({addPost:true})
    }
},[location.search])
//_____for handling Add post of header 




    if(isLoading)return <Loader />
    if(error){return toast.error(`دریافت پست های شما با خطا مواجه شد ، دوباره امتحان کنید`)}
    return (
        <section className='absolute flex flex-col  items-start  w-full h-[85svh]  z-10 overflow-clip' >
            <section className='h-28  flex flex-row  sm:w-full text-xs sm:text-sm text-nowrap w-full sm:right-1/3 items-center justify-center sm:gap-4  '>

                <button className={`Darkbutton  h-11 text-wrap  text-[0.5rem] w-1/5 sm:text-base ${showItem.categoryList ? "bg-black text-white" : "bg-white text-black"}`}
                        onClick={()=>setShowItem({categoryList:true})}
                >
                     دسته بندی ها
                </button>
                <button className={`Darkbutton  h-11 w-1/5 text-wrap  text-[0.5rem] sm:text-base ${showItem.categoryForm ? "bg-black text-white" : "bg-white text-black"}`}
                        onClick={()=>setShowItem({categoryForm:true})}
                >
                    افزودن دسته بندی 
                </button>
                <button className={`Darkbutton  h-11 w-1/5  text-[0.5rem] sm:text-base ${showItem.myPosts ? "bg-black text-white" : "bg-white text-black"}`}
                        onClick={()=>setShowItem({myPosts:true})}
                >
                    پست های من
                </button>
                <button className={`Darkbutton  h-11 w-1/5  text-[0.5rem] sm:text-base ${showItem.addPost ? "bg-black text-white" : "bg-white text-black"}`}
                        onClick={()=>setShowItem({addPost:true})}
                >
                    افزودن پست 
                </button>
                <button className={`Darkbutton bg-lightBrown text-center flex justify-center items-center h-11 w-1/5 text-[0.5rem] sm:text-base `} onClick={ExitHandler} >
                    <img src="exit.svg" alt="" />
                خروج
                </button>
            </section>
            <section className='relative w-[80%] right-[10%] overflow-y-scroll overflow-x-hidden '>

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