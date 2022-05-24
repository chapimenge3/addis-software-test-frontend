// Define baseurl const to https://628d249ca3fd714fd03ff793.mockapi.io/api/employee/Employee
const BASE_URL = "https://628d249ca3fd714fd03ff793.mockapi.io/api/employee/Employee"

export interface Employee {
    id: number
    name: string
    salary: number
    age: number
    birthdate: Date
}

// Fetch the Employee from the API and cast it to json object
export const getEmployees = async (): Promise<Employee[]> => {
    const response = await fetch(BASE_URL)
    return await response.json()
}

export default {}