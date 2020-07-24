import Head from 'next/head';
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

type Props = {
    title: string;
    hello: string;
    who: string;
};

const Home = ({ title, hello }: Props) => {
    return (
        <>
            <Head>
                <title>Michał Maćkowiak - My place in the internet</title>
            </Head>
            <Layout>
                <header>
                    <p>{hello}</p>
                    <Title>{title}</Title>
                    <p>Soon ...</p>
                </header>
            </Layout>
        </>
    );
};

export default Home;
