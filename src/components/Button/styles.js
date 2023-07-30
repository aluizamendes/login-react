import { styled } from "styled-components";

export const Button = styled.button`
    /* all: unset; */
    border-radius: 60px;
    border: 1px solid ${props => props.primary ? "transparent" : "#7F57F1"};
    background-color: ${props => props.primary ? "#7F57F1" : "white"};
    color: ${props => props.primary ? "white" : "#7F57F1"};
    font-size: 18px;
    font-weight: 500;
    padding: 10px 24px;
    width: 100%;
    cursor: pointer;
`