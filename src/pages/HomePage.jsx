import React, { useState } from 'react';
// components
import MainSidebar from '../components/MainSidebar';
import MainComponent from '../components/MainComponent';
// utils
import Loader from '../modules/Loader';
import toast from 'react-hot-toast';
import { AllProductsQuery } from '../hooks/ReactQueriesHooks';

const HomePage = () => {
    const[filterByCategory,setFilterByCategory]=useState("all")

    const [searchByName,setSearchByName]=useState("")

    console.log(searchByName);
    
    
    
    const {data,isLoading,error}=AllProductsQuery()
    if(isLoading)return <Loader/>;
    if(error) toast.error("بارگذاری با خطا مواجه شده است")
        
// search by category
let shownPosts=null;

if(filterByCategory === "all")shownPosts=data?.data.posts
if(filterByCategory !== "all") shownPosts= data?.data.posts.filter(i=> i.category === filterByCategory) 
    //______ search by category
// search by name

const filteredItems=shownPosts.filter(i=>i.options.title.trim().includes(searchByName))
//_____search by name


    return (
        <>
        {isLoading ? <Loader/>:
            <main className=' flex flex-row overflow-x-hidden'>
            <MainSidebar 
                filterByCategory={filterByCategory} 
                setFilterByCategory={setFilterByCategory} 
                searchByName=
                {searchByName}
                setSearchByName=
                {setSearchByName}
            />
            <MainComponent posts={filteredItems}
            
            />
            </main>
        }
        </>
    );
};

export default HomePage;