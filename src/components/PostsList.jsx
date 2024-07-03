import { useQuery } from '@tanstack/react-query';
import React from 'react';
// services
import { getMyPosts } from '../services/Dashbord';
import toast from 'react-hot-toast';
import Loader from '../modules/Loader';
import axios from 'axios';
import { getCookie } from '../utils/cookie';
import api from '../configs/apiConfigs';

const PostsList = () => {
    const baseURL=import.meta.env.VITE_BASE_URL;
    const{isLoading,data,error}=useQuery({queryKey:["my-posts-list"],queryFn:getMyPosts});
    
    if(error){return toast.error(`دریافت پست های شما با خطا مواجه شد ، دوباره امتحان کنید`)}
    if(isLoading)return <Loader text={"در حال بارگذاری لیست"}/>

    // console.log(data.data.posts[0].images);

    return (
        <article>
            {
                data.data.posts.map(post=>
                    <section key={post._id}>
                        {/* <img src={`${import.meta.env.VITE_BASE_URL}${post[0].images}`} /> */}
                        <section>
                            <p></p>
                            <span></span>
                        </section>
                        <section>

                        </section>
                    </section>
                )
            }
        </article>
    );
};

export default PostsList;