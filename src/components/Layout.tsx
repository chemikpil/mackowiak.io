import { ReactNode } from 'react';
import Head from 'next/head';
import { Global, css } from '@emotion/core';
import styled from 'theme/styled';

const Content = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    min-height: 100vh;
    background: ${({ theme }) => theme.color.background};
    transition: background 0.1s ease-in;
`;

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props) => (
    <>
        <Global
            styles={css`
                @font-face {
                    font-family: 'Raleway';
                    src: url('/raleway.ttf');
                    font-style: normal;
                    font-weight: 100;
                    font-display: swap;
                }

                html {
                    font-size: 62.5%;
                }

                body {
                    margin: 0;
                    padding: 0;

                    font-size: 1.6rem;
                    font-family: Raleway, Helvetica, Arial, sans-serif;
                }
            `}
        />
        <Content>{children}</Content>
    </>
);

export { Layout };
