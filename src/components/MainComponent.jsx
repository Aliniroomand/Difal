import React from 'react';
// utils
import { ChangePriceToToman } from '../utils/ChangePriceToIranToman';
// images
import postsBG from "../assets/images/paper_without_BG.png"
import { Link } from 'react-router-dom';


const MainComponent = ({posts}) => {




    return (
        <main className='mainPageComponentForSmallPage sm:mainPageComponentForLargePage text-darkBrown'>
        {
            posts.map((posts)=>
                <Link to={`/product/${posts._id}`}  key={posts._id} className='relative flex sm:flex-col flex-col items-center justify-between sm:h-60 h-52 text-xs w-32 top-32 sm:top-0 sm:w-53 text-center hover:scale-110 transition-all'>
                    <img src={postsBG} className='absolute z-0 h-full w-full opacity-90' alt="postsBG" />
                    <section className='absolute flex flex-col justify-between items-center w-full h-1/2 top-8 '>
                            <img loading='lazy' 
                                onError={(e)=>{e.currentTarget.src="ErrorImageWithText.svg"}} 
                                className='top-100 w-full h-full maskForImages' 
                                src={`${import.meta.env.VITE_BASE_URL}/${posts?.images}`} />
                            <p className=' text-md text-darkBrown'>{posts?.options?.title} </p>
                    </section>
                    <section className='absolute flex sm:flex-row flex-col items-center justify-center sm:items-center gap-3 h-1/2 top-1/2 sm:w-1/2 w-full'>
                            <section className='grid place-items-center py-3'>
                                <span className='text-gray-800'>{ChangePriceToToman(posts?.amount)}تومان</span>
                                <span className='flex flex-row items-center absolute bottom-0 pb-3'>
                                    <img  src="location.svg" alt="location svg" />
                                    <p className=' text-gray-800'>{posts?.options?.city}
                                    </p>

                                </span>
                            </section>
                    </section>
                </Link>
        )
        }
        </main>
    );
};

export default MainComponent;