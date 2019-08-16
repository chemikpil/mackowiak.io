import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Content, Title, Summary } from '../components/UI/main';

const IndexPage = () => (
    <Layout>
		<SEO title='Personal site' />
		<Content>
        	<Title>Michał Maćkowiak</Title>
			<Summary>
				<span>Frontend Developer</span>
				<span>Amateur Photographer</span>
				<span>Traveler</span>
				<span>Runner</span>
			</Summary>
		</Content>
    </Layout>
);

export default IndexPage;
