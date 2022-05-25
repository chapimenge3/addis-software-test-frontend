import { Link } from 'react-router-dom'
import styled from 'styled-components'

export interface ButtonProps {
    primary?: boolean
}

// style a link 
export const StyledLink = styled(Link)<ButtonProps>`
    background-color: ${(props: any) => props.primary ? '#4CAF50' : '#4CAFFF'};
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
`
