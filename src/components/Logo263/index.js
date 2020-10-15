import React from 'react';
import {ContImgLogo} from './styled';

const Logo263 = ({ children, ...props }) => {
    return (
        <ContImgLogo ToSide={props.ToSide}>
            <img src="/img/logo263.svg" alt="#263"/>
            <h1>PROYECTO#263_</h1>
        </ContImgLogo>
    )
}

export {Logo263};