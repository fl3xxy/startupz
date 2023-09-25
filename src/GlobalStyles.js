import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        scroll-behavior: smooth;
        width: 100%;
    }
    body {
        margin: 0;
        padding: 0;
        width: 100%;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
    }
    img {
        pointer-events: none;
    }
    p {
        margin: 0;
        padding: 0;
    }
`