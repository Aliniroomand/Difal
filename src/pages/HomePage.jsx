import React, { useState } from 'react';
// components
import MainSidebar from '../components/MainSidebar';
import MainComponent from '../components/MainComponent';
// queries and fuctions
import { useQuery } from '@tanstack/react-query';
import { getAllPosts } from '../services/Dashbord';
// utils
import Loader from '../modules/Loader';
import toast from 'react-hot-toast';

const HomePage = () => {
    const[filterByCategory,setFilterByCategory]=useState("all")


        const {data,isLoading,error}=useQuery({queryKey:["all-posts"],queryFn:getAllPosts})
        
        if(isLoading)return <Loader/>;
        if(error) toast.error("بارگذاری با خطا مواجه شده است")


        let shownPosts=null;
            
        if(filterByCategory === "all")shownPosts=data?.data.posts
          if(filterByCategory !== "all") shownPosts= data?.data.posts.filter(i=> i.category === filterByCategory) 


    return (
        <>
        {isLoading ? <Loader/>:
            <main className=' flex flex-row overflow-x-hidden'>
            <MainSidebar 
                filterByCategory={filterByCategory} 
                setFilterByCategory={setFilterByCategory} />
            <MainComponent posts={shownPosts}/>
            </main>
        }
        </>
    );
};

export default HomePage;