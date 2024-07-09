import React from 'react';
import AddNewPost from '../components/AddNewPost';
import PostsList from '../components/PostsList';
import toast from 'react-hot-toast';
import Loader from '../modules/Loader';
import  {MyPostsListQuery}  from '../hooks/ReactQueriesHooks';

const DashbordPage = () => {
    const{data,isLoading,error}=MyPostsListQuery()

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