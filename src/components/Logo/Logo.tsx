import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';

import LogoSrc from '../../images/logo.svg';

const Logo = styled.img`
    width: 48px;

    @media only screen and (min-width: 1024px) {
        width: 64px;
    }
`;

const LinkedLogo = () => (
    <Link to='/'>
        <Logo src={LogoSrc} alt='Michał Maćkowiak' />
    </Link>
)

export default LinkedLogo;
