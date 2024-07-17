import { createSlice } from "@reduxjs/toolkit";


const loadState = () => {
    try {
      const serializedState = localStorage.getItem("favorites");
      if (serializedState === null) {
        return [];
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return [];
    }
  };
  
  const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("favorites", serializedState);
    } catch (err) {
    }
  };
  




const initialState=loadState()

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