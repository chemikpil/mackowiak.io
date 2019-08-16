import React from 'react';

import GlobalStyles, { Main } from './styles';
import Header from '../Header';
import Logo from '../Logo';
import { MenuIcon } from '../Menu';

interface Props {
    children: React.ReactNode
};

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
