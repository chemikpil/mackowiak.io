import styled from 'theme/styled';

const Title = styled.h1`
    margin: 0;

    font-size: calc(3rem + (140 - 30) * ((100vw - 300px) / (1600 - 300)));
    text-indent: -0.8vw;
`;

export { Title };
