import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import userReduser from "./slices/UserSlice"
import profileReducer from "./slices/ProfileSlice"

export default configureStore({
    reducer:{
        user:userReduser,
        profile:profileReducer
    }
})