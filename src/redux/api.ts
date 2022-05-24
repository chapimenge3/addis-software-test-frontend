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

export default {}