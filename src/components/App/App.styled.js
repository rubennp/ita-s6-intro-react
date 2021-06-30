import styled from 'styled-components';

export const Navega = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

export const Escenes = styled.main`
    padding: 0 20px;
`;

export const Benvinguda = styled.main`
    font-family: Arial, sanserif;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
        font-weight: bold;
        font-size: 2.5rem;
    }

    h2 { color: #505050; }

    button {
        padding: 20px;
        font-size: 1.5rem;
        margin-top: 50px;
        cursor: pointer;
        box-shadow: 2px 2px 5px rgba(0,0,0, .5);

        &:hover { box-shadow: inset 0 0 1px rgba(0,0,0,0.5); }
    }

`;
