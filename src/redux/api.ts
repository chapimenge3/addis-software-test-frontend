// Define baseurl const to https://628d249ca3fd714fd03ff793.mockapi.io/api/employee/Employee
const BASE_URL = "https://628d249ca3fd714fd03ff793.mockapi.io/api/employee/Employee"

export interface Employee {
    id: number
    name: string
    salary: number
    birthdate: string
    gender: string
}

// Fetch the Employee
export const getEmployees = async (): Promise<Employee[]> => {
    const response = await fetch(BASE_URL)
    return await response.json()
}

// Fetch Employee Details 
export const getEmployeesDetails = async (id: number): Promise<Employee> => {
    const response = await fetch(`${BASE_URL}/${id}`)
    return await response.json()
}

// delete employee
export const deleteEmployee = async (id: number): Promise<void> => {
    await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    })
}


export default Employee;