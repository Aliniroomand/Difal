import { useQuery } from '@tanstack/react-query';
import React from 'react';
// services
import { getMyPosts } from '../services/Dashbord';
import toast from 'react-hot-toast';
import Loader from '../modules/Loader';

const PostsList = () => {
    const baseURL=import.meta.env.VITE_BASE_URL;

    const{isLoading,data,error}=useQuery({queryKey:["my-posts-list"],queryFn:getMyPosts});
    
    if(error){return toast.error(`دریافت پست های شما با خطا مواجه شد ، دوباره امتحان کنید`)}
    if(isLoading)return <Loader text={"در حال بارگذاری لیست"}/>
    // console.log(data);

    return (
        <article>
            {/* {
                data.data.posts.map(post=>
                    <section key={post._id}>
                        <img src={`${baseURL}${post.images[0]}`} alt="post image" />
                        <section>
                            <p></p>
                            <span></span>
                        </section>
                        <section>

                        </section>
                    </section>
                )
            } */}
        </article>
    );
};

export default PostsList;