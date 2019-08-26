import React from 'react'
import { Link } from 'gatsby';

import { Logo } from './styles';

import LogoSvg from '../../images/logo.svg';

const LinkedLogo = () => (
    <Link to='/'>
        <Logo>
            <LogoSvg />
        </Logo>
    </Link>
)

export default LinkedLogo;
