import { useQuery } from '@tanstack/react-query';
import React from 'react';
// services
import { getMyPosts } from '../services/Dashbord';
// utils
import toast from 'react-hot-toast';
import { ChangePriceToToman } from '../utils/ChangePriceToIranToman';
import Loader from '../modules/Loader';
import DeletePosts from './DeletePosts';
import MyPost from './MyPost';

const PostsList = ({posts}) => {
    return (
        <article className=' relative flex flex-col items-start justify-between gap-2 border-red-200 border-[1.5px] text-sm px-2  w-[90%] right-[5%] rounded-xl  backdrop-blur-sm bg-white bg-opacity-40'>
            <h1 className='titles absolute text-sm '>لیست پست های من</h1>
            {
                posts.data.posts.map(post=>
                    <MyPost
                        post={post}
                        key={post._id}    
                    />
                )
            }
        </article>
    );
};

export default PostsList;