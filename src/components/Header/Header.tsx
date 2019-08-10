import React from 'react';
import styled from 'styled-components';

interface Props {
    children: React.ReactNode
};

const Header = styled.header`
    position: absolute;
    top: 0;
    left: 50%;

    display: flex;
    justify-content: space-between;

    margin-left: -50%;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;

    @media only screen and (min-width: 1024px) {
        margin-left: -512px;
        width: 1024px;
    }

    @media only screen and (min-width: 1440px) {
        margin-left: -720px;
        width: 1440px;
        padding: 50px 0 0 68px;
    }
`;

export default ({ children }: Props) => <Header>{children}</Header>;
