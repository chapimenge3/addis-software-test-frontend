import styled from 'styled-components'

export const ExployeesTable = styled.table`
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
`
export const ExployeeData = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
`
export const EmployeeHeader = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04AA6D;
    color: white;
`

export const EmployeeRow = styled.tr`
&:nth-child(even){
    background-color: #f2f2f2;
}
&:hover{
    background-color: #ddd;
}
`