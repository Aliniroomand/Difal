import React from 'react';
import searchIcon from "/searchIcon.svg"
const SearchByNameOfSideBar = ({searchByName,setSearchByName}) => {
    return (


        <section className='grid place-items-center relative z-[60] h-[5svh] w-full sm:w-48 right-[10%] sm:top-[4svh] top-[1svh]  sm:right-6 sm:h-[5svh]  text-white '>
        <input className='absolute w-4/5   right-1/5  placeholder:text-white text-center placeholder:text-xs bg-darkBrown maskForImages h-full'
            placeholder="جستجو بر اساس نام..."  
            value={searchByName}
            onChange={(e)=>setSearchByName(e.target.value)}
          />
          <img className='absolute right-0 bg-darkBrown maskForImages h-full w-1/5 ' src={searchIcon} alt="" />
          </section>
    );
};

export default SearchByNameOfSideBar;