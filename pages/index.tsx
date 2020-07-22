import Head from 'next/head';
import { Layout } from '../components/Layout';
import { Title } from '../components/Title';

const Home = () => {
    return (
        <>
            <Head>
                <title>Michał Maćkowiak - My place in the internet</title>
            </Head>
            <Layout>
                <header>
                    <Title>Michał Maćkowiak</Title>
                    <p>Soon ...</p>
                </header>
            </Layout>
        </>
    );
};

export default Home;
