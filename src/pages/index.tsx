import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Content, Title } from '../components/UI/main';

const IndexPage = () => (
    <Layout>
		<SEO title='Personal site' />
		<Content>
        	<Title>Michał Maćkowiak</Title>
			<span>Soon...</span>
		</Content>
    </Layout>
);

export default IndexPage;
