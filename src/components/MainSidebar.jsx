import React from 'react';


import CategoryContainerOfSideBar from './CategoryContainerOfSideBar';
import SearchByNameOfSideBar from './SearchByNameOfSideBar';

const MainSidebar = ({filterByCategory,setFilterByCategory,searchByName,setSearchByName}) => {
    


    return (
        <>

        <aside className='fixed w-[100svw] sm:w-52 sm:h-[50svh] top-[8svh] z-10 h-fit'>
            <SearchByNameOfSideBar
                setSearchByName={setSearchByName}
                searchByName={searchByName}
            />

           <CategoryContainerOfSideBar
                filterByCategory={filterByCategory}setFilterByCategory={setFilterByCategory}
           />
        </aside>
        </>
    );
};

export default MainSidebar;