import React from 'react';
import {NavBarButton} from '../NavBarButton';
import {StyledNavBar} from './styled';
import { Link } from 'react-router-dom';

const NavBar = ({ children, ...props }) => {
    return (
        <StyledNavBar>
            <Link to="/Principal/">
                <NavBarButton Color="#E31075" ColorAdentro="rgba(227,16,117, 0.45)">
                    Home
                </NavBarButton>
            </Link>
            <Link to="/Project/pokemon">
                <NavBarButton Color="#35BDE4" ColorAdentro="rgba(53,189,228, 0.45)">
                    Proyecto
                </NavBarButton>
            </Link>
            <Link to="/About/">
                <NavBarButton Color="#10E3A2" ColorAdentro="rgba(16,227,162, 0.45)">
                    Nosotros
                </NavBarButton>
            </Link>
            <Link to="/Dashboard/">
                <NavBarButton Color="#E31075" ColorAdentro="rgba(227,16,117, 0.45)">
                    Dashboard
                </NavBarButton>
            </Link>
            <Link to="/Dashboard/">
                <NavBarButton Color="#35BDE4" ColorAdentro="rgba(53,189,228, 0.45)">
                    Dashboard
                </NavBarButton>
            </Link>
        </StyledNavBar>
    )
}

export {NavBar};