# Revision of React-Redux & React-Toolkit `Notes`

1. `App` folder create and in that we build **Store** page in that the code below:-

   - first we use **_configureStore_** which import from `redux-toolkit` this help to supply the data from other page with the help of **reducer**.
   - Inside this take parameter as a _object_.

```js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/TodoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
```

2. `features` folder create and in that w build **Reducer** as **TodoSlice.js** page in that the code below:-

    - first we import *createSlice* As createSlice creates your actions as well as your **reducer** for you, you don't have to worry about type safety here. *Action* types can just be provided inline:
    
    - If you have too many case reducers and defining them inline would be messy, or you want to reuse case reducers across slices, you can also define them outside the createSlice call and type them as CaseReducer:

```js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "hello world" }],
};
//! this is initial state we have to take here state where we put the data and here we have update the state ... initialState

export const todoSlice = createSlice({
  name: "todo", // this is only for 'redux-toolkit name convention
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        todo.id !== action.payload;
      });
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
```
