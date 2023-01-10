import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
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
                status: !todo.status
            }
        })
    },
    removeTodo: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
  },
});

export const { addTodo, removeTodo, changeStatus } = todoSlice.actions;

export default todoSlice.reducer;
