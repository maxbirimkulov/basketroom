import {configureStore} from "@reduxjs/toolkit";
import  clothes from './clothes'
import  user from './user'

const store = configureStore({
    reducer: {
        clothes,
        user,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck:false,
        }),
});

export default store
