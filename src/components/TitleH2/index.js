import React from 'react'
import ContTitleH2 from './styled'

const TitleH2 = ({ children, ...props }) => {

    return (
        <ContTitleH2 
        Color={props.Color}
        FontF={props.FontF}
        FontS={props.FontS}
        CenterText={props.CenterText}
        >
            {children}
        </ContTitleH2>
    )
}

export {TitleH2};