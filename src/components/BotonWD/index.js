import React from 'react';
import ContBtnWD from './styled';
import {Rombo} from '../Rombo';

const BotonWD = ({ children, ...props }) => {
    const {Color, ColorAdentro, Tamanio, EventHover, EventHoverOut, HeightPx, WidthPx} = props;
    return (
        <ContBtnWD WidthPx={WidthPx} HeightPx={HeightPx} onMouseEnter={EventHover !== undefined ? EventHover : null} onMouseLeave={EventHoverOut !== undefined ? EventHoverOut : null}>
            <Rombo Color={Color} ColorAdentro={ColorAdentro} Tamanio={Tamanio}></Rombo>
            <div className="btnWD-text">
                {children}
            </div>
        </ContBtnWD>
    )
}

export {BotonWD};