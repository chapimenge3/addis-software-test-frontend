// make a redux-saga methods to request the Employee
import { put, takeEvery } from 'redux-saga/effects'
import { Employee, getEmployees, getEmployeesDetails, deleteEmployee } from './api'
import { getEmployeesSuccess, getEmployeesFailure } from './employeeSlice'
import { getEmployeeDetailsSuccess, getEmployeeDetailsFailure, deleteEmployeeSuccess, deleteEmployeeFailure } from './EmployeeDetailsSlice'

// Define the redux-saga for getting employee
export function* getEmployeesAction() {
    try {
        const employees: Employee[] = yield getEmployees()
        yield put(getEmployeesSuccess(employees))
    } catch (error: any) {
        yield put(getEmployeesFailure(error.message))
    }
}

// Define the redux-saga for getting employee details
export function* getEmployeeDetailsAction(action: any) {
    try {
        const employee: Employee = yield getEmployeesDetails(action.payload.id)
        yield put(getEmployeeDetailsSuccess(employee))
    } catch (error: any) {
        yield put(getEmployeeDetailsFailure(error.message))
    }
}

// Define the redux-saga for deleting employee
export function* deleteEmployeeAction(action: any) {
    try {
        yield deleteEmployee(action.payload.id)
        yield put(deleteEmployeeSuccess())
    } catch (error: any) {
        yield put(deleteEmployeeFailure(error.message))
    }
}

    // Root Saga for watching all the actions
    export function* rootSaga() {
        yield takeEvery('employee/getEmployeesStart', getEmployeesAction)
        yield takeEvery('emplyeeDetails/getEmployeeDetailsStart', getEmployeeDetailsAction)
        yield takeEvery('emplyeeDetails/deleteEmployeeStart', deleteEmployeeAction)

    }
