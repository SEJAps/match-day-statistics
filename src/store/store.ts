import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import statsReducer from './slices/statsSlice'
import userReducer from './slices/userSlice'
import timerReducer from './slices/timerSlice'
import newTimerReducer from './slices/newTimerSlice'
import markReducer from './slices/markSlice'
const store = configureStore({
  reducer: {
    stats: statsReducer,
    user: userReducer,
    timer: timerReducer,
    newTimer: newTimerReducer,
    marks: markReducer
  },
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>() // Export a hook that can be reused to resolve types
export const useAppSelector = useSelector.withTypes<RootState>()

export default store