import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    align-self: ${props => props.align};
`

export const Input = styled.input`
    accent-color: #7F57F1;
`

export const Label = styled.label`
    font-size: 14px;
    color: #444444;
`