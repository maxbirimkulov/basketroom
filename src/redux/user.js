import {createSlice} from "@reduxjs/toolkit";

const user = createSlice({
    name:"user",
    initialState:{
        user: {
            favourites: [],
            cart: [],
        },
        discount: 0
    },
    reducers: {
        findUser: (state, action) => {
            state.user = action.payload.user
        },

        addToFavourites: (state, action) => {
            state.user.favourites = action.payload.arr;
        },
        saveCart: (state, action) => {
            state.user.cart = action.payload.arr;
        },
        saveDiscount: (state, action) => {
            state.discount = action.payload.arr
        }

    }
});


export default user.reducer
export const {addToFavourites, saveCart, saveDiscount, findUser} = user.actions;