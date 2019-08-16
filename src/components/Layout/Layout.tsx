import React from 'react';
import styled from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import Header from '../Header';
import Logo from '../Logo';
import { MenuIcon } from '../Menu';

interface Props {
    children: React.ReactNode
};

const Main = styled.main`
    max-width: 100%;
    height: 100vh;
    margin: 0 auto;

    font-family: var(--text-font-family);
    font-size: var(--text-mobile-text-size);

    @media only screen and (min-width: 1024px) {
        max-width: var(--rs-tablet);
        
        border-left: 1px solid var(--bg-gray-color);
        border-right: 1px solid var(--bg-gray-color);

        font-size: var(--text-desktop-text-size);
    }

    @media only screen and (min-width: 1440px) {
        max-width: var(--rs-desktop);
    }
`;

const Layout = ({ children }: Props) => (
    <>
        <GlobalStyles />
        <Header>
            <Logo />
            <MenuIcon />
        </Header>
        <Main>{children}</Main>
    </>
);

export default Layout;
