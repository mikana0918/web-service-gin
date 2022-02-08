import { configureStore } from '@reduxjs/toolkit'
import { useSelector as rawUseSelector, TypedUseSelectorHook } from "react-redux";
import {  reducer as albumsSliceReducer } from '@/store/slices/alibumSlice';

export const store = configureStore({
  reducer: {
    albums: albumsSliceReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// define selector for client code to shortcut
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;