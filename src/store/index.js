import {configureStore} from "@reduxjs/toolkit";
import restaurantApi from './restoraneApi/restoraneApi'


export const store = configureStore({
    reducer:{
        restaurantApi
    }
})