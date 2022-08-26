import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../axios";


export const getProducts = createAsyncThunk(
    'clothes/getProducts',
    async (filter,{rejectWithValue}) => {
        try {
            const res  = await axios(`/clothes?title=${filter.title}&category=${filter.category}&from=${filter.from}&to=${filter.to}&desc=${filter.desc}&page=${filter.page}&limit=100`);
            if (res.statusText !== 'OK') {
                throw new Error('Server error !')
            }
            return res.data
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);
export const deleteProducts = createAsyncThunk(
    'clothes/deleteProducts',
    async (id, {rejectWithValue, dispatch}) => {
        try {
            const res = await  axios.delete(`/clothes/${id}`);
            if (res.statusText !== 'OK'){
                throw new Error('can\'t delete product. Server error.')
            }

            dispatch()
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);
export const updateProduct = createAsyncThunk(
    'clothes/updateProduct',
    async (id, {rejectWithValue,dispatch, getState}) => {
        try {
            const res = await axios.patch(`/clothes/${id}`, {});
            if (res.statusText !== 'OK'){
                throw new Error('')
            }

        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);
export const getOneProduct = createAsyncThunk(
    'clothes/getOneProduct',
    async (id, {rejectWithValue}) =>{
        try {
            const res = await axios(`/clothes/${id}`);
            if (res.statusText !== 'OK'){
                throw new Error('Can\'t find this product, server error')
            }
            localStorage.setItem('oneProduct', JSON.stringify({...res.data}));
            return res.data;

        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);




const clothes = createSlice({

    name: "clothes",
    initialState: {
        products:[

        ],
        oneProduct: {},
        filter: {
            range:{
                from: 0,
                to: 5000,
            },
            title: '',
            desc: true,
            category: '',
            page: 1
        },
        status: '',
        error: '',
        productsCount: 0,
    },
    reducers: {
        searchProduct : ((state, action) => {
            state.filter = {...state.filter, title: action.payload}
        })
    },

    extraReducers: {
        [getProducts.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [getProducts.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.products = action.payload.products;
            state.productsCount = action.payload.productsLength;
        },
        [getProducts.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },

        [deleteProducts.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },

        [getOneProduct.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [getOneProduct.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.oneProduct = action.payload;
        },
        [getOneProduct.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
});


export default clothes.reducer;
export const { searchProduct} = clothes.actions;