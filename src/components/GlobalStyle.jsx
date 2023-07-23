import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: inherit;
        text-decoration: none;
        list-style: none;
    }

    body {
        background: linear-gradient(222deg, #EDF1F5 0%, #FBFBFB 100%);
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`