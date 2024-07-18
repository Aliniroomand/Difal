import { createSlice } from "@reduxjs/toolkit";


const loadFavorite = () => {
    try {
      const serializedFavorite = localStorage.getItem("favorites");
      if (serializedFavorite === null) {
        return [];
      }
      return JSON.parse(serializedFavorite);
    } catch (err) {
      return [];
    }
  };
  
  const saveFavorite = (Favorite) => {
    try {
      const serializedFavorite = JSON.stringify(Favorite);
      localStorage.setItem("favorites", serializedFavorite);
    } catch (err) {
    }
  };
  




const initialState=loadFavorite()

const favoriteSlice=createSlice({
    name:"favorites",
    initialState,
    reducers:{
        AddOrRemoveFavorite:(state,action)=>{
            const id=action.payload;
            const index=state.findIndex(i=>i===id);

            if(index === -1){
                state.push(id);
            }else{
                state.splice(index,1);
            }
            saveState(state)
            
        }
    }
})

export default favoriteSlice.reducer;
export const {AddOrRemoveFavorite}=favoriteSlice.actions;
export const favoritesStore=store=>store.favorites;