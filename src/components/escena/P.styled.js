import styled from 'styled-components';

export const P = styled.p`
    text-align: center;
    border: 2px solid black;
    border-radius: 20px;
    padding: 10px;
    
    background-color: ${({actiu}) => actiu ?  'rgba(255, 0, 0, 0.75)' : 'rgba(255, 255, 255, 0.75)'};
    font-weight: ${({actiu}) => actiu ? 'bold' : 'normal'};
`;
