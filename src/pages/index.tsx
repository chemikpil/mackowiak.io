import React from 'react';
import Head from 'next/head';
import styled from 'theme/styled';
import { fetch } from 'utils/client';
import { HOME_QUERY } from '../queries/home';
import { Layout } from '../components/Layout';
import { Title } from '../components/Title';
import { Hello } from 'components/Hello';
import { Who } from 'components/Who';

export const getStaticProps = async () => {
    const { abouts } = await fetch(HOME_QUERY);

    return {
        props: {
            ...abouts[0],
        },
    };
};

const Header = styled.header`
    display: grid;
    grid-gap: 12px;
`;

const Soon = styled.h2`
    margin: 40px 0 0;
    color: ${({ theme }) => theme.color.text};
`;

type Props = {
    title: string;
    hello: string;
    who: string;
};

const Home = ({ title, hello, who }: Props) => {
    return (
        <>
            <Head>
                <title>Michał Maćkowiak - My place in the internet</title>
            </Head>
            <Layout>
                <Header>
                    <Hello>{hello}</Hello>
                    <Title>{title}</Title>
                    <Who>{who}</Who>
                </Header>

                <Soon>soon...</Soon>
            </Layout>
        </>
    );
};

export default Home;
