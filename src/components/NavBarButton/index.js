import React from 'react'
import ContButtonNavBar from './styled'

const NavBarButton = ({ children, ...props }) => {

    return (
        <ContButtonNavBar 
        Color={props.Color}
        ColorAdentro={props.ColorAdentro}
        >
            <div className="div-border">  
            </div>
            <div className="div-inside">
                <p> {children}</p>
            </div>
        </ContButtonNavBar>
    )
}

export {NavBarButton};