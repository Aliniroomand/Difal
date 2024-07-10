import { Children, createContext, useState } from "react";


const SearchContext=createContext({
    searchQuery:"",
    setSearchQuery:()=>{}
})

const SearchProvider =({children})=>{

    const [searchQuery, setSearchQuery] = useState('');

    return (
      <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
        {children}
      </SearchContext.Provider>
    );
}

export {SearchContext,SearchProvider}