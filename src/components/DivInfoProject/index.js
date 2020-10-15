import React from 'react';
import {ContInfoProj} from './styled';

const DivInfoProject = ({ children, ...props }) => {
    return (
        <ContInfoProj>
            {children}
        </ContInfoProj>
    )
}

export {DivInfoProject};