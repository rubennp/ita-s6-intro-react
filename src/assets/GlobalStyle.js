import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 10px;
        background-image: ${({img}) => `url("${img}")`};
        background-size: cover;
        height: 100vh;
    }
`;