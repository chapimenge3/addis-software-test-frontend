import { configureStore } from '@reduxjs/toolkit'
import employeeSlice from './employeeSlice'

export const store = configureStore({
    reducer: {
        employee: employeeSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
