import {createSlice} from "@reduxjs/toolkit";

const clothes = createSlice({
    name: "clothes",
    initialState: {
        closes:[

        ],
        filter:'',
        range:{
            from: 0,
            to: 5000,
        },
        clothesCount: 0,
    },
    reducers: {
        getAllClothes: ((state, action) => {
    state.clothes = action.payload.arr;
    state.clothesCount = action.payload.arr.length;
        })
    }
});


export default clothes.reducer;
export const {getAllClothes} = clothes.actions;