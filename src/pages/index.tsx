import React from 'react';

import SEO from '../components/SEO';
import { Content, Title, Summary } from '../components/UI/main';

const IndexPage = () => (
    <>
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
    </>
);

export default IndexPage;
