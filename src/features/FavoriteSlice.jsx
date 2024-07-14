import { createSlice } from "@reduxjs/toolkit";

const initialState=[]


const AddToFavoriteSlice=createSlice({
    name:"favorites",
    initialState,
    reducers:{
        AddOrRemoveFavorite:(id)=>{

            if(initialState.length === 0){
                initialState.push(id);
            }
            if(initialState.length !== 0 && !!initialState.find(i=>i===id)){
                initialState.filter(i=>i!==id)
            }
            if(initialState.length !== 0 && !!initialState.find(i=>i!==id)){
                initialState.push(id)
            }
        }
    }
})

export default AddToFavoriteSlice.reducer;
export const {AddOrRemoveFavorite}= AddToFavoriteSlice.actions;
export const favoriteStore=(store)=>store.favorites