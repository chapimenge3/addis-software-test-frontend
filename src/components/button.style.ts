import styled from 'styled-components'

// style a button
export const StyledButton = styled.button`
    background-color: ${(props: any) => props.primary ? '#4CAF50' : '#f44336'};
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
`
