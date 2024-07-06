import React from 'react';
// utils
import { ChangePriceToToman } from '../utils/ChangePriceToIranToman';
// images
import postsBG from "../assets/images/paper_without_BG.png"

const MainComponent = ({posts}) => {
console.log(posts);




    return (
        <main className=' mainPageComponent text-darkBrown'>
        {
            posts.map((posts)=>
                <section key={posts._id} className='relative flex sm:flex-col flex-col items-center justify-between h-80 w-52'>
                    <img src={postsBG} className='absolute z-0 h-full w-full' alt="" />
                    <section className='absolute flex flex-col justify-center sm:items-center items-center gap-6 sm:w-1/2 w-full h-1/2 mt-10'>
                            <img className=' w-full h-full maskForImages' src={`${import.meta.env.VITE_BASE_URL}/${posts.images}`} />
                            <section className='flex flex-col '>
                                <p className='text-md'>{posts.options.title}</p>
                            </section>
                    </section>
                    <section className='absolute flex sm:flex-row flex-col items-center justify-center sm:items-center sm:justify-center gap-3 h-1/2 top-1/2 sm:w-1/2 w-full'>
                            <section className='grid place-items-center py-3'>
                                <p>{posts.options.city}</p>
                                <span><span className='text-gray-700 text-xs'> قیمت :  </span>{ChangePriceToToman(posts.amount)}تومان</span>
                            </section>
                    </section>
                </section>
        )}
        </main>
    );
};

export default MainComponent;