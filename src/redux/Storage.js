import {configureStore} from '@reduxjs/toolkit'

import useTodos from './todoSlice'

const store = configureStore({
    reducer: {
        todos: useTodos
    }
})
export  {store}