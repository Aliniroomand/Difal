import { createSlice } from "@reduxjs/toolkit";

const initialState=[]

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
            
        }
    }
})

export default favoriteSlice.reducer;
export const {AddOrRemoveFavorite}=favoriteSlice.actions;
export const favoritesStore=store=>store.favorites;