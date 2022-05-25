import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Employee } from './api'

const EmployeeDetailsSlice = createSlice({
    name: 'EmplyeeDetails',
    initialState: {
        employee: null as Employee | null,
        loading: false,
        error: null as string | null,
    },
    reducers: {
        getEmployeeDetailsStart: (state) => {
            state.loading = true
            state.error = null
        },
        getEmployeeDetailsSuccess: (state, action) => {
            state.loading = false
            state.employee = action.payload
            state.error = null
        },
        getEmployeeDetailsFailure: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },
        deleteEmployeeStart: (state) => {
            state.loading = true
            state.error = null
        },
        deleteEmployeeSuccess: (state) => {
            state.loading = false
            state.error = null
        },
        deleteEmployeeFailure: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },
    }
})

export const { getEmployeeDetailsStart, getEmployeeDetailsSuccess, getEmployeeDetailsFailure, deleteEmployeeStart, deleteEmployeeSuccess, deleteEmployeeFailure } = EmployeeDetailsSlice.actions

export default EmployeeDetailsSlice.reducer
