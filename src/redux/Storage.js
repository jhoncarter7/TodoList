import {configureStore} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import useTodos from './todoSlice'
import {persistReducer, persistStore} from 'redux-persist'


const persistConfig = {
    key: 'root',
    storage,
    version : 1
}

const persistedReducer = persistReducer(persistConfig, useTodos)
export const store = configureStore({
    reducer: {
        todos: persistedReducer
    },
    middleware: (getDefaultMiddleware ) => getDefaultMiddleware ({
        serializableCheck: false
         })
})

export const persistor = persistStore(store)