import React, { useState } from 'react';
import AddNewPost from '../components/AddNewPost';
import PostsList from '../components/PostsList';
import toast from 'react-hot-toast';
import Loader from '../modules/Loader';
import  {MyPostsListQuery}  from '../hooks/ReactQueriesHooks';
import { useNavigate } from 'react-router-dom';

const DashbordPage = () => {
    const{data,isLoading,error}=MyPostsListQuery()
    const[showItem,setShowItem]=useState({
        addPost:false,
        myPosts:false,
    })
    const navigate=useNavigate()


const ExitHandler=()=>{
    setCookie({accessToken:"",refreshToken:""})
    navigate("/auth");
    window.location.reload()
    return


}


    if(error){return toast.error(`دریافت پست های شما با خطا مواجه شد ، دوباره امتحان کنید`)}
    if(isLoading)return <Loader />

    return (
        <section className='absolute flex flex-col  items-start  w-full h-[85svh]  z-10'>

            <section className='h-[15%]  flex flex-col w-full items-center justify-evenly '>
                <button className={`Darkbutton ${showItem.addPost ? "bg-black text-white" : "bg-white text-black"}`} onClick={()=>setShowItem({addPost:true})} >
                لیست پستهای من
                </button>
                <button className={`Darkbutton ${showItem.myPosts ? "bg-black text-white" : "bg-white text-black"}`} onClick={()=>setShowItem({myPosts:true})} >
                افزودن پست جدید
                </button>
                <button className={`Darkbutton bg-white text-darkBrown text-center flex justify-center items-center`} onClick={ExitHandler} >
                    <img src="exit.svg" alt="" />
                خروج
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