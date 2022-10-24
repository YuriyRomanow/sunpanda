import {createSlice} from "@reduxjs/toolkit";


const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: {
        status: true,
        price: '',
        shopName: ''
    },
    reducers: {
        changeStatusShop(state, action) {
        },
        setPrice(state, action) {
            state.price = action.payload
        },
        setName(state, action) {
            state.shopName = action.payload
        }
    }
})

export const {changeStatusShop, setPrice, setName} = restaurantSlice.actions

export default restaurantSlice.reducer