import React from 'react';

import GlobalStyles, { Main } from './styles';
import Header from '../Header';
import Footer from '../Footer';

interface Props {
    children: React.ReactNode
};

const Layout = ({ children }: Props) => (
    <>
        <GlobalStyles />
        <Header />
        <Main>{children}</Main>
        <Footer />
    </>
);

export default Layout;
