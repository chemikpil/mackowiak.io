import styled from 'theme/styled';

const Hello = styled.p`
    margin: 0;

    font-size: calc(2rem + (60 - 20) * ((100vw - 300px) / (1600 - 300)));
    text-indent: -0.3vw;
`;

export { Hello };
