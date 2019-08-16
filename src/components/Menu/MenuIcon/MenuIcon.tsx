import React, { useState } from 'react';

import { Container, Element, CenterElement } from './styles';

const MenuIcon = () => {
    const [isOpen, toggleOpen] = useState(false);

    const handleOpen = () => {
        toggleOpen(!isOpen);
    }

    return (
        <Container isOpen={isOpen} onClick={handleOpen}>
            <div>
                <Element />
                <Element />
            </div>
            <CenterElement />
        </Container>
    );
};

export default MenuIcon;
