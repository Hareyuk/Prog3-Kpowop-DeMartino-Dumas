import React from 'react'
import ContRombo from './styled'

const Rombo = ({ children, ...props }) => {

    return (
        <ContRombo 
        Color={props.Color}
        ColorAdentro={props.ColorAdentro}
        Tamanio={props.Tamanio}
        >
            <div class="div-border">  
                <div class="div-inside">

                </div>
            </div>
        </ContRombo>
    )
}

export {Rombo};