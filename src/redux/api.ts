// Define baseurl const to https://628d249ca3fd714fd03ff793.mockapi.io/api/employee/Employee
const BASE_URL = "https://wuz792tp80.execute-api.us-east-1.amazonaws.com/dev"

export interface Employee {
    id: string | null
    name: string
    salary: number
    birthdate: Date
    gender: string
}

// Response object of the backend
export interface Response {
    totalDocs: number | null,
    offset: number | null,
    limit : number | null,
    totalPages: number | null,
    hasPrevPage: boolean | null,
    hasNextPage: boolean | null,
    employees: Employee[],
    page: number | null
    prevPage: number | null
    nextPage: number | null
    sort: string | null
}

export interface Params {
    page?: number | null
    limit?: number | null
    offset ?: number | null
    sort: string | null
    name: string | null
    gender: string | null
}

// Fetch the Employee
export const getEmployees = async (params: Params): Promise<Response> => {
    // build the pagination params for the request
    const { page, limit } = params
    const offset = page && limit ? (page - 1) * limit : 0
    // get the sort if exists
    const sort = params.sort ? params.sort : "name"
    // get the search for name and gender
    const name = params.name ? params.name : ""
    const gender = params.gender ? params.gender : ""
    // build the request url
    const url = `${BASE_URL}?offset=${offset}&limit=${limit}&sort=${sort}&name=${name}&gender=${gender}`

    const response = await fetch(url)
    const data = await response.json()
    // change the datetime field to Date type
    data.employees.forEach((employee: any) => {
        employee.birthdate = new Date(employee.birthdate)
    })
    return data
}

// Fetch Employee Details 
export const getEmployeesDetails = async (id: number): Promise<Employee> => {
    const response = await fetch(`${BASE_URL}/${id}`)
    const data =  await response.json()
    data.birthdate = new Date(data.birthdate)
    return data
}

// delete employee
export const deleteEmployee = async (id: number): Promise<void> => {
    await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    })
}

// update employee
export const updateEmployee = async (id: number, employee: Employee): Promise<Employee> => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    })
    const data =  await response.json()
    data.birthdate = new Date(data.birthdate)
    return data
}

// Create Employee
export const createEmployee = async (employee: Employee): Promise<Employee> => {

    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    })
    return await response.json()
}

export default Employee;