import React from 'react';
import AddNewPost from '../components/AddNewPost';
import PostsList from '../components/PostsList';
import { useQuery } from '@tanstack/react-query';
import { getMyPosts } from '../services/Dashbord';
import toast from 'react-hot-toast';
import Loader from '../modules/Loader';

const DashbordPage = () => {
    const{data,isLoading,error}=useQuery({queryKey:["my-posts-list"],queryFn:getMyPosts})

    if(error){return toast.error(`دریافت پست های شما با خطا مواجه شد ، دوباره امتحان کنید`)}
    if(isLoading)return <Loader text={"در حال بارگذاری لیست"}/>
    return (
        <div>
            <PostsList posts={data}/>
            <AddNewPost/>
        </div>
    );
};

export default DashbordPage;