import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counters/countersSlice";
import postsReducer from "../features/posts/postsSlice";
import { apiSlice } from "../features/api/apiSlice";


const Store = configureStore({
    reducer:{
        counters: counterReducer, 
        posts: postsReducer,
        [apiSlice.reducerPath]:apiSlice.reducer,
    },
});

export default Store;