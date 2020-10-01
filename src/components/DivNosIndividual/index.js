import React from 'react';
import {ContNosIndividual} from './styled';

const DivNosIndividual = ({ children, ...props }) => {
    const {Subject, Name, PictureInsta} = props;
    return (
        <ContNosIndividual>
            <h3>{Subject}</h3>
            <h4>{Name}</h4>
            <img src={PictureInsta} alt={Name}/>
        </ContNosIndividual>
    )
}

export {DivNosIndividual};