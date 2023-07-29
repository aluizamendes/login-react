import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    position: relative;
`

export const IconContainer = styled.div`
    display: flex;
    padding: 8px;
    position: absolute;
    top: 10%;
    right: 10px;
    border-radius: 20px;
    

    cursor: ${props => props.name === "password" ? "pointer" : ""};
    transition: .5s;

    &:hover {
        background-color: ${props => props.name === "password" ? "whitesmoke" : ""};
        svg path {
            color: ${props => props.name === "password" ? "#7F57F1" : ""};
            transition: .5s ;
        }
    }
`

export const Input = styled.input`
    outline: transparent;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    padding: 12px 48px 12px 16px;
    width: 100%;
    border: 1px solid #BFC4CA;
    border-radius: 4px;
    margin-bottom: 8px;
    transition: outline .2s;

    &::placeholder {
        color: #C9C9C9;
    }

    &:focus {
        outline: 3px solid #8057f142;
    }
`