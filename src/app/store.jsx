import { configureStore } from "@reduxjs/toolkit";
import AddOrRemoveFavorite  from "../features/FavoriteSlice";

const store=configureStore({
    reducer:{favorites:AddOrRemoveFavorite},
})

export default store