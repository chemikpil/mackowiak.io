import React from 'react';

import Logo from '../Logo';
import { MenuIcon } from '../Menu';
import { Header, Menu } from './styles';

export default () => (
    <Header>
        <Logo />
        <Menu>
            <MenuIcon />
        </Menu>
    </Header>
);
