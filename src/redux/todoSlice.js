import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  AllTodoList: [],
  error: false,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    AddTodo: (state, action) => {
      state.AllTodoList = [...state.AllTodoList, action.payload];
    },
    UpdateTodo: (state, action) => {
      const indx = state.AllTodoList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (!indx) {
        state.error = true;
      }
      state.error = false;
      state.AllTodoList[indx] = action.payload;
    },

    DeleteTodo: (state, action) => {
      const indx = state.AllTodoList.findIndex(
        (item) => item.id === action.payload
      );

      if (indx === -1) {
        state.error = true;
        return;
      } else {
        state.error = false;
        state.AllTodoList.splice(indx, 1);
      }
    },
  },
});

export const { AddTodo, UpdateTodo, DeleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
