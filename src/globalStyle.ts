import { createGlobalStyle } from "styled-components";

import { theme } from "@/theme";

export const GlobalStyle = createGlobalStyle<{ theme: typeof theme }>`
body{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
button {
    ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.white};
    outline: none;
    border: 0;
    padding: ${({ theme }) => theme.spaces.ss}px;
    border-radius : ${({ theme }) => theme.spaces.ss}px;
    cursor: pointer;
}
`;
