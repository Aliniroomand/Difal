import React from 'react';

import MyPost from './MyPost';

const PostsList = ({posts}) => {
    return (
        <article className='relative flex flex-col items-center justify-start gap-2 border-red-200 border-[1.5px] text-sm px-2 max-h-[75svh] min-h-fit overflow-y-scroll w-[90%] right-[5%] rounded-xl  backdrop-blur-sm bg-white bg-opacity-40  '>
            <h1 className='titles absolute text-sm '>لیست پست های من</h1>
            {posts.data.posts.length === 0 ?
            <h1 className='h-20 pt-12'>شما پستی بارگذاری نکرده اید</h1>:
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