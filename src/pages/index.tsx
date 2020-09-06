import React from 'react';
import Head from 'next/head';
import { fetch } from 'utils/client';
import { HOME_QUERY } from '../queries/home';
import { Layout } from '../components/Layout';
import { Header } from 'components/Header';

export const getStaticProps = async () => {
    const { abouts } = await fetch(HOME_QUERY);

    return {
        props: {
            ...abouts[0],
        },
    };
};

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
                <Header hello={hello} title={title} who={who} />
            </Layout>
        </>
    );
};

export default Home;
