import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlicer";


export const store = configureStore({
    reducer: {
        todos: todoSlice,

    }
})