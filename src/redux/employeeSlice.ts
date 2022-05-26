import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Employee, Response } from './api'


// intialstate with pagination
const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        employees: [] as Employee[],
        loading: false,
        error: null as string | null,
        page: 1 as number | null,
        totalDocs: 0 as number | null,
        offset: 0 as number | null,
        limit: 10 as number | null,
        totalPages: 0 as number | null,
        hasPrevPage: false as boolean | null,
        hasNextPage: false as boolean | null,
        sort: 'name' as string | null,
    },
    reducers: {
        getEmployeesStart: (state) => {
            state.loading = true
            state.error = null
        },
        getEmployeeSearchStart: (state) => {
            state.error = null
        },
        getEmployeesSuccess: (state, action: PayloadAction<Response>) => {
            state.loading = false
            state.employees = action.payload.employees
            state.offset = action.payload.offset
            state.limit = action.payload.limit
            state.totalDocs = action.payload.totalDocs
            state.totalPages = action.payload.totalPages
            state.hasPrevPage = action.payload.hasPrevPage
            state.hasNextPage = action.payload.hasNextPage
            state.error = null
            state.sort = action.payload.sort || state.sort
        },
        getEmployeesFailure: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export const { getEmployeesStart, getEmployeesSuccess, getEmployeesFailure } = employeeSlice.actions

export default employeeSlice.reducer