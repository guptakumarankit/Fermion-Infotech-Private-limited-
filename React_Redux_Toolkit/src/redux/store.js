import { configureStore } from "@reduxjs/toolkit"
import counterReducer from '../redux/counter/CounterSlice.js'

export const store = configureStore({
    reducer : {
        counter: counterReducer,
    },
})