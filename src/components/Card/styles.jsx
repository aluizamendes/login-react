import styled from "styled-components";

export const Container = styled.aside`
    width: 430px;
    padding: 50px 45px;
    border-radius: 10px;
    border: 1px solid #CCD3E5;
    background-color: #FFF;
    box-shadow: 0px 4px 16px 0px rgba(122, 130, 201, 0.10);

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
`

export const Title = styled.h2`
    font-size: 18px;
    font-weight: 700;
    font-weight: 600;
    color: #444444;
    margin-top: 32px;
    margin-bottom: 20px;
`

export const SpanDivisor = styled.span`
    color: #444444;
    position: relative;
    text-align: center;
    margin: 8px 0;
    width: 100%;

    &::after {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        right: 0px;
        height: 1px;
        width: 40%;
        background-color: #BFC4CA;
    }
    
    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: 0px;
        height: 1px;
        width: 40%;
        background-color: #BFC4CA;
    }
`

export const LinksWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    a {
        font-size: 14px;
        color: #7F57F1;
        font-weight: 600;
        text-decoration: underline;
    }

    input {
        width: 16px;
        height: 16px;
    }
`