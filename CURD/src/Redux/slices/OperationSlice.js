import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos : []
}

const operationSlice = createSlice({
    name : 'operation' ,
    initialState ,
    reducers : {
        AddTodo(state , actions) {
            // console.log(actions.payload)
            state.todos.push({id : Date.now() , todo : actions.payload})
        },
        RemoveTodo(state , actions){
            // console.log("id" , actions.payload);
            state.todos = state.todos.filter((item) => item.id != actions.payload);
        },
        EditTodo(state , actions){
            const { id , input } = actions.payload;
            // console.log("operationId" , id);
            // console.log("input" , input);

            state.todos = state.todos.map((currTodo) => (
                currTodo.id === id ? {...currTodo , todo : input} : currTodo 
            ))    
        }
    } 
})

export const { AddTodo , RemoveTodo , EditTodo } = operationSlice.actions;
export default operationSlice.reducer;