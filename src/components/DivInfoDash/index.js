import React from 'react';
import {ContInfoDash} from './styled';

const DivInfoDash = ({ children, ...props }) => {
    return (
        <ContInfoDash>
            {children}
        </ContInfoDash>
    )
}

export {DivInfoDash};