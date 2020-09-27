import React from 'react'
import ContRombo from './styled'

const Rombo = ({ children, ...props }) => {

    return (
        <ContRombo 
        Color={props.Color}
        ColorAdentro={props.ColorAdentro}
        Tamanio={props.Tamanio}
        TamanioDentro = {props.Tamanio- 5}

        >
            <div className="div-border">  
                <div className="div-inside">

                </div>
            </div>
        </ContRombo>
    )
}

export {Rombo};