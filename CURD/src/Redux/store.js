import { configureStore } from '@reduxjs/toolkit'
import operationReducer from './slices/OperationSlice.js'

export const store = configureStore({
    reducer:{
        operation : operationReducer,
    },
})

