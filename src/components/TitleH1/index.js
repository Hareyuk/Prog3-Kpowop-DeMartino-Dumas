import React from 'react'
import ContTitleH1 from './styled'

const TitleH1 = ({ children, ...props }) => {

    return (
        <ContTitleH1 
        Color={props.Color}
        FontF={props.FontF}
        FontS={props.FontS}
        >
            {children}
        </ContTitleH1>
    )
}

export {TitleH1};