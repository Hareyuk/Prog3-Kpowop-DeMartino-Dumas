import React from 'react';
import ContBtnWD from './styled';
import {Rombo} from '../Rombo';

const BotonWD = ({ children, ...props }) => {
    const {Color, ColorAdentro, Tamanio, eventHover, eventHoverOut} = props;
    return (
        <ContBtnWD onMouseEnter={eventHover !== undefined ? eventHover : ""} onMouseLeave={eventHoverOut !== undefined ? eventHoverOut : ""}>
            <Rombo Color={Color} ColorAdentro={ColorAdentro} Tamanio={Tamanio}></Rombo>
            <div className="btnWD-text">
                {children}
            </div>
        </ContBtnWD>
    )
}

export {BotonWD};