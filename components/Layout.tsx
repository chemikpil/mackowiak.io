import { ReactNode } from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';

const Content = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    min-height: 100vh;
`;

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props) => (
    <>
        <Head>
            <link rel="preload" href="/titillium-web.woff2" as="font" />
            <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <Global
            styles={css`
                @font-face {
                    font-family: 'Titillium';
                    src: url('/titillium-web.woff2');
                    font-weight: bold;
                    font-style: normal;
                    font-display: swap;
                }

                html {
                    font-size: 62.5%;
                }

                body {
                    margin: 0;
                    padding: 0;

                    font-size: 1.6rem;
                    font-family: Titillium, Helvetica, Arial, sans-serif;
                    text-rendering: optimizelegibility;
                }
            `}
        />
        <Content>{children}</Content>
    </>
);

export { Layout };
