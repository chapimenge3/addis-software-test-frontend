// make a redux-saga methods to request the Employee
import { put, takeEvery } from 'redux-saga/effects'
import { Employee, getEmployees as getEmp } from './api'
import { getEmployeesSuccess, getEmployeesFailure } from './employeeSlice'

// Define all the redux-saga for getting employee
export function* getEmployees() {
    try {
        const employees: Employee[] = yield getEmp()
        yield put(getEmployeesSuccess(employees))
    } catch (error: any) {
        yield put(getEmployeesFailure(error.message))
    }
}

export function* rootSaga() {
    yield takeEvery('employee/getEmployeesStart', getEmployees)
}
