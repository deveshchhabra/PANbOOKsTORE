import {configureStore } from "@reduxjs/toolkit";
import appSlice from "./1appSlice.js";

const store=configureStore({
    reducer:{
        app:appSlice,
      
    },
})

export default store;