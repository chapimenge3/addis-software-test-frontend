import { configureStore } from '@reduxjs/toolkit'
import employeeSlice from './employeeSlice'
import createSagaMiddleware from '@redux-saga/core'
import { rootSaga } from './saga'
import EmployeeDetailsSlice from './EmployeeDetailsSlice'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        employee: employeeSlice,
        employeeDetails: EmployeeDetailsSlice

    },
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
  