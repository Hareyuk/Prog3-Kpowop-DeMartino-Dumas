import React from 'react';
import {NavBarButton} from '../NavBarButton';
import {StyledNavBar} from './styled';
import { Link } from 'react-router-dom';

const NavBar = ({ children, ...props }) => {
    return (
        <StyledNavBar>
            <NavBarButton Color="#35BDE4" ColorAdentro="rgba(53,189,228, 0.45)"><Link to="/Project/">
                Proyecto
            </Link></NavBarButton>
            <NavBarButton Color="#10E3A2" ColorAdentro="rgba(16,227,162, 0.45)"><Link to="/About/">
                Nosotros
            </Link></NavBarButton>
            <NavBarButton Color="#E31075" ColorAdentro="rgba(227,16,117, 0.45)"><Link to="/Dashboard/">
                Dashboard
            </Link></NavBarButton>
        </StyledNavBar>
    )
}

export {NavBar};