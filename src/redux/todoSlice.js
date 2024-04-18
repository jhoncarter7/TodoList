import  {createSlice} from '@reduxjs/toolkit'

const initialState = {
    AllTodoList: [],
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
     AddTodo: (state, action)=> {
       state.AllTodoList = [...state.AllTodoList, action.payload]

     },
    //  EditTodo: (state, action)=> {

    //  }

    }
})

export const {AddTodo} = todoSlice.actions;
export default todoSlice.reducer