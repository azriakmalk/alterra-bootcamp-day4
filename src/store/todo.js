import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    getTodo: (state, { payload } ) => {
      state.todos = payload;
    },
    addTodo: (state, { payload }) => {
      state.todos = [...state.todos, payload];
    },
    changeStatus: (state, { payload }) => {
        state.todos = state.todos.map((todo) => {
            if(payload !== todo.id) {
                return todo
            }
            return {
                ...todo,
                completed: !todo.completed
            }
        })
    },
    removeTodo: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
  },
});

export const { addTodo, removeTodo, changeStatus, getTodo } = todoSlice.actions;

export default todoSlice.reducer;
