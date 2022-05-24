import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Employee } from './api'

const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        list: [] as Employee[],
        loading: false,
        error: null as string | null,
    },
    reducers: {
        getEmployeesStart: (state) => {
            state.loading = true
            state.error = null
        }
        ,
        getEmployeesSuccess: (state, action: PayloadAction<Employee[]>) => {
            state.loading = false
            state.list = action.payload
            state.error = null
        },
        getEmployeesFailure: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export const { getEmployeesStart, getEmployeesSuccess, getEmployeesFailure } = employeeSlice.actions

export default employeeSlice.reducer