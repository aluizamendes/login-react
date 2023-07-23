import { styled } from "styled-components";

export const Main = styled.main`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 40px;

    min-height: 100vh;
    width: min(90%, 80rem);
    margin-inline: auto;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        justify-content: flex-end;

    }
`

export const Illustration = styled.img`
    width: 100%;
`