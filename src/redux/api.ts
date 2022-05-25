// Define baseurl const to https://628d249ca3fd714fd03ff793.mockapi.io/api/employee/Employee
const BASE_URL = "https://628d249ca3fd714fd03ff793.mockapi.io/api/employee/Employee"

export interface Employee {
    id: number | null
    name: string
    salary: number
    birthdate: Date
    gender: string
}

// Fetch the Employee
export const getEmployees = async (): Promise<Employee[]> => {
    const response = await fetch(BASE_URL)
    const data = await response.json()
    // change the datetime field to Date type
    data.forEach((employee: any) => {
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
    return await response.json()
}

// Create Employee
export const createEmployee = async (employee: Employee): Promise<Employee> => {
    console.log('Create Employee', JSON.stringify(employee));

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