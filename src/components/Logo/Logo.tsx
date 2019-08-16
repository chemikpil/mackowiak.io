import React from 'react'
import { Link } from 'gatsby';

import { Logo } from './styles';

import LogoSrc from '../../images/logo.svg';

const LinkedLogo = () => (
    <Link to='/'>
        <Logo src={LogoSrc} alt='Michał Maćkowiak' />
    </Link>
)

export default LinkedLogo;
