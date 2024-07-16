import React from 'react';
import { AllProductsQuery } from '../hooks/ReactQueriesHooks';
import { useSelector } from 'react-redux';
import { favoritesStore } from '../features/FavoriteSlice';
import MyPost from '../components/MyPost';

const FavoritePage = () => {
    const {data,isLoading}=AllProductsQuery()
    console.log(data.data.posts);
    const favoriteList=useSelector(favoritesStore)
    const favoriteDatas = data.data.posts.filter(post => favoriteList.includes(post._id));
    console.log(favoriteDatas);

    return (
        <article className=' relative flex flex-col items-start justify-between gap-2 border-red-200 border-[1.5px] text-sm px-2  w-[90%] right-[5%] rounded-xl  backdrop-blur-sm bg-white bg-opacity-40'>
            <h1 className='titles absolute text-sm '>لیست پست های من</h1>
            {
                favoriteDatas.data.posts.map(post=>
                    <MyPost
                        post={post}
                        key={post._id}    
                    />
                )
            }
        </article>
    );
};

export default FavoritePage;