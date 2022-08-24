import {createSlice} from "@reduxjs/toolkit";

const user = createSlice({
    name:"user",
    initialState:{
        favourites: [],
        cart: [],
        discount: 0
    },
    reducers: {
        addToFavourites: (state, action) => {
            state.favourites = action.payload.arr;
        },
        saveCart: (state, action) => {
            state.cart = action.payload.arr;
        },
        saveDiscount: (state, action) => {
            state.discount = action.payload.arr
        }

    }
});


export default user.reducer
export const {addToFavourites, saveCart, saveDiscount} = user.actions;