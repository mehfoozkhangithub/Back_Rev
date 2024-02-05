import { createSlice, nanoid} from "@reduxjs/toolkit";

const initialState={
    id:1,
    text:"hello world"
}

export const todoSlice=createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todo=state.todo.filter((todo)=>todo.id !== action.payload);
        }
    }   
})

export const {addTodo,removeTodo}=todoSlice.actions;

export default   todoSlice.reducer;