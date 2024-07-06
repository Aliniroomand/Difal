import React from 'react';
// components
import MainSidebar from '../components/MainSidebar';
import MainComponent from '../components/MainComponent';
// queries
import { useQuery } from '@tanstack/react-query';
import { getAllPosts } from '../services/Dashbord';
import Loader from '../modules/Loader';
import toast from 'react-hot-toast';

const HomePage = () => {
        const {data,isLoading,error}=useQuery({queryKey:["all-posts"],queryFn:getAllPosts})
        
        const shownPosts=data?.data.posts;
    if(isLoading)return <Loader/>;
    if(error) toast.error("بارگذاری با خطا مواجه شده است")
    return (
        <>
        {isLoading ? <Loader/>:
            <main className='flex flex-row'>
            <MainSidebar/>
            <MainComponent posts={shownPosts}/>
            </main>
        }
        </>
    );
};

export default HomePage;