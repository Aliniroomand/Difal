import React from 'react';
import arrowBottom from "/arrowbottom.svg"

const SearchTab = ({setShowSearchBar}) => {

    return (
        <section id='aaa' className='fixed w-[98svw] h-[10svh] top-0 right-[1svw] z-[55] fadeIn_animation bg-white rounded-full text-2xl'>
            <input type="text"  placeholder='دنبال چی میگردید؟' className=' w-full bg-lightBrown border-4 border-darkBrown h-full text-center text-darkBrown placeholder:text-darkBrown rounded-2xl '/>
            <button className=' bg-darkBrown w-[50%] rounded-b-full text-white' onClick={()=>setShowSearchBar(false)}>بستن</button>
        </section>
    );
};

export default SearchTab;