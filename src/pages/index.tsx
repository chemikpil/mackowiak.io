import React from 'react';
import Head from 'next/head';
import styled from 'theme/styled';
import { fetch } from 'utils/client';
import { Layout } from '../components/Layout';
import { Title } from '../components/Title';
import { HOME_QUERY } from '../queries/home';

export const getStaticProps = async () => {
    const { abouts } = await fetch(HOME_QUERY);

    return {
        props: {
            ...abouts[0],
        },
    };
};

const Soon = styled.h2`
    color: ${({ theme }) => theme.color.text};
`;

type Props = {
    title: string;
    hello: string;
    who: string;
};

const Home = ({ title }: Props) => {
    return (
        <>
            <Head>
                <title>Michał Maćkowiak - My place in the internet</title>
            </Head>
            <Layout>
                <header>
                    <Title>{title}</Title>
                    <Soon>Soon ...</Soon>
                </header>
            </Layout>
        </>
    );
};

export default Home;
