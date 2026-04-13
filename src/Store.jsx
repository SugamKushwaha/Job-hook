import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import userReduser from "./slices/UserSlice"
import profileReducer from "./slices/ProfileSlice"
import filterReduser from "./slices/FilterSlice"
import sortReduser from "./slices/SortSlice"

export default configureStore({
    reducer:{
        user:userReduser,
        profile:profileReducer,
        filter:filterReduser,
        sort:sortReduser
    }
})