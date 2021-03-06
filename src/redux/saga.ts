// make a redux-saga methods to request the Employee
import { put, takeEvery } from 'redux-saga/effects'
import { Response, Employee, getEmployees, getEmployeesDetails, deleteEmployee, updateEmployee, createEmployee } from './api'
import { getEmployeesSuccess, getEmployeesFailure } from './employeeSlice'
import { getEmployeeDetailsSuccess, getEmployeeDetailsFailure, deleteEmployeeSuccess, deleteEmployeeFailure } from './EmployeeDetailsSlice'

// Define the redux-saga for getting employee
export function* getEmployeesAction(action: any) {
    try {
        const response: Response = yield getEmployees(action.payload.params) 
        // add sort to the response
        response.sort = action.payload.params.sort  
        yield put(getEmployeesSuccess(response))
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

// Define the redux-saga for updating employee
export function* updateEmployeeAction(action: any) {
    try {
        const employee: Employee = yield updateEmployee(action.payload.id, action.payload.employee)
        yield put(getEmployeeDetailsSuccess(employee))
    } catch (error: any) {
        yield put(getEmployeeDetailsFailure(error.message))
    }
}

// Define the redux-saga for creating employee
export function* createEmployeeAction(action: any) {
    try {
        const employee: Employee = yield createEmployee(action.payload.employee)
        yield put(getEmployeeDetailsSuccess(employee))
    } catch (error: any) {
        yield put(getEmployeeDetailsFailure(error.message))
    }
}

    
// Root Saga for watching all the actions
export function* rootSaga() {
    yield takeEvery('employee/getEmployeesStart', getEmployeesAction)
    yield takeEvery('employee/getEmployeeSearchStart', getEmployeesAction)
    yield takeEvery('emplyeeDetails/getEmployeeDetailsStart', getEmployeeDetailsAction)
    yield takeEvery('emplyeeDetails/deleteEmployeeStart', deleteEmployeeAction)
    yield takeEvery('emplyeeDetails/updateEmployeeStart', updateEmployeeAction)
    yield takeEvery('emplyeeDetails/createEmployeeStart', createEmployeeAction)
}
