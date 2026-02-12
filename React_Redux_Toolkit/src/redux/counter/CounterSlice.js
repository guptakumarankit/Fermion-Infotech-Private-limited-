import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : [],
    tag : 1,
}

export const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers:{
        increment : (state , actions) => {
            // console.log("actions" , actions);
            state.value.push(1);
            // state.value += 1
            console.log("state" , state.value);
            console.log("State tag" , state.tag);
        },
        decrement : (state , actions) => {
            // console.log("state" , state.value);
            // console.log("actions" , actions);
            state.value.push(2);
            // state.value -= 1;
        }
    }
})

export const {increment , decrement} = counterSlice.actions;
export default counterSlice.reducer